import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../assets/logo/netflixlogo.svg";
import classes from "./Nav.module.css";
const Nav = (props) => {
	const [showNavbar, setShowNavbar] = useState(false);
	const navigate = useNavigate();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			setShowNavbar(true);
		} else {
			setShowNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div
			className={`${classes.nav} ${showNavbar ? `${classes.nav__black}` : ""}`}>
			<div className={classes.nav__contents}>
				<img
					onClick={() => props.subscription && navigate("/")}
					className={classes.nav__logo}
					src={netflixLogo}
					alt='netflix logo'
				/>
				<img
					onClick={() => navigate("/profile")}
					className={classes.nav__avatar}
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Nav;
