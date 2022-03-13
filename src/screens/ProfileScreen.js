import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlanScreen from "./PlanScreen";
import classes from "./ProfileScreen.module.css";
const ProfileScreen = () => {
	const [subscriptionState, setSubscriptionState] = useState(false);
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	const subscriptionHandler = (data) => {
		setSubscriptionState(data);
	};
	return (
		<div className={classes.profileScreen}>
			<Nav subscription={subscriptionState} />
			<div className={classes.profileScreen__body}>
				<h1>Edit Profile</h1>
				<div className={classes.profileScreen__info}>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
						alt='profile icon'
					/>
					<div className={classes.profileScreen__details}>
						<h2>{user.email}</h2>
						<div className={classes.profileScreen__plans}>
							<h3>Plans</h3>
							<PlanScreen onSubscription={subscriptionHandler} />
							<button
								onClick={() => {
									navigate("/");
									return auth.signOut();
								}}
								className={classes.profileScreen__signOut}>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
