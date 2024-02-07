import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import classes from "./css_modules/PlanScreen.module.css";
import { loadStripe } from "@stripe/stripe-js";
const PlanScreen = ({ onSubscription, subscription, setSubscription }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          onSubscription(subscription.data().role);
          return setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid, onSubscription, setSubscription]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);
  const loadCheckout = async (priceId) => {
    setLoading(true);
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured : ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51KceFwAkjzOhKETumrUr4hCm4KLaAR13XnSgg1k8C3RuSUU2gm1tnjzJWp9J71wuFfL7RNjBOzIpnBmPoSLZuGh900ZF7zrQtm"
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
    setLoading(false);
  };

  return (
    <div className={classes.planScreen}>
      <br />
      {subscription && (
        <p>
          Renewel date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        //
        return (
          <div
            key={productId}
            className={`${classes.planScreen__plan} ${
              isCurrentPackage && classes["planScreen__plan--disabled"]
            }`}
          >
            <div className={classes.plansScreen__info}>
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {!isCurrentPackage ? "Subscribe" : "Current Package"}
            </button>
          </div>
        );
      })}
      <span>{loading ? "Loading" : "Welcome"}!</span>
    </div>
  );
};

export default PlanScreen;
