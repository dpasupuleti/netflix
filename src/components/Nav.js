import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../assets/logo/netflixlogo.svg";
import "./Nav.css";
const Nav = () => {
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
		<div className={`nav ${showNavbar ? "nav__black" : ""}`}>
			<div className='nav__contents'>
				<img
					onClick={() => navigate("/")}
					className='nav__logo'
					src={netflixLogo}
					alt='netflix logo'
				/>
				<img
					onClick={() => navigate("/profile")}
					className='nav__avatar'
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Nav;
