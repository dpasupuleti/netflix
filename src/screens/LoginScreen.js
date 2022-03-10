import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
const LoginScreen = () => {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className='loginScreen'>
			<div className='loginScreen__background'>
				<img
					className='loginScreen__logo'
					src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
					alt='loginscreen netflix logo'
				/>
				<button className='loginScreen__button' onClick={() => setSignIn(true)}>
					Sign In
				</button>
				<div className='loginScreen__gradient' />
			</div>
			<div className='loginScreen__body'>
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
						<div className='loginScreen_input'>
							<form>
								<input type='email' placeholder='Email Address' />
								<button
									onClick={() => setSignIn(true)}
									type='click'
									className='loginScreen__getStarted'>
									GET STARTED
								</button>
							</form>
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default LoginScreen;
