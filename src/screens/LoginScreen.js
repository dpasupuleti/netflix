import React, { useState } from "react";
import classes from "./LoginScreen.module.css";
import SignupScreen from "./SignupScreen";
import netflixLogo from "../assets/logo/netflixlogo.svg";
import StoryCards from "../components/StoryCards";
const LoginScreen = () => {
	const [signIn, setSignIn] = useState(false);
	return (
		<div className={classes.loginScreen}>
			<div className={classes.loginScreen__background}>
				<img
					className={classes.loginScreen__logo}
					onClick={() => setSignIn(false)}
					src={netflixLogo}
					alt='netflix logo'
				/>
				<button
					className={classes.loginScreen__button}
					onClick={() => setSignIn(true)}>
					Sign In
				</button>
				<div className={classes.loginScreen__gradient} />
			</div>
			<div className={classes.loginScreen__body}>
				{signIn ? (
					<SignupScreen />
				) : (
					<React.Fragment>
						<h1>Unlimited movies, TV shows, and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className={classes.loginScreen_input}>
							<form>
								<input type='email' placeholder='Email Address' />
								<button
									onClick={() => setSignIn(true)}
									type='click'
									className={classes.loginScreen__getStarted}>
									GET STARTED
								</button>
							</form>
						</div>
						<StoryCards />
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default LoginScreen;
