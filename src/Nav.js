import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);
	return (
		<div className={`nav ${show ? "nav__black" : ""}`}>
			<div className='nav__contents'>
				<img
					className='nav__logo'
					src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
					alt='netflix logo'
				/>
				<img
					className='nav__avatar'
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Nav;
