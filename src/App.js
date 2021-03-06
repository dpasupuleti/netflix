import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		// basically it listens to any authentication state change it gives back callback function
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// logout
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div style={{ backgroundColor: "black" }}>
			<BrowserRouter>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route exact path='/' element={<HomeScreen />} />
						<Route exact path='/profile' element={<ProfileScreen />} />
					</Routes>
				)}
			</BrowserRouter>
		</div>
	);
}

export default React.memo(App);
