import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAUR_KmsdLflrBK6JVOoJO2Y1bmoeHEDsA",
	authDomain: "netflix-67e76.firebaseapp.com",
	projectId: "netflix-67e76",
	storageBucket: "netflix-67e76.appspot.com",
	messagingSenderId: "482309546119",
	appId: "1:482309546119:web:b387c3c62863e141615822",
};
// used this to intialize the application with firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// used this for databse and authentication
const auth = firebase.auth();
const db = firebaseApp.firestore();
export { auth };
export default db;
