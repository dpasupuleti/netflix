import React, { useState } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
const SignupScreen = () => {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(emailInput, passwordInput)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((e) => console.log(e.message));
	};
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(emailInput, passwordInput)
			.then((authUser) => console.log(authUser))
			.catch((e) => console.log(e.message));
	};
	const emailHandler = (e) => {
		setEmailInput(e.target.value);
		console.log(e.target.value);
	};
	const passwordHandler = (e) => {
		setPasswordInput(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className='signupScreen'>
			<form>
				<h1>Sign In</h1>
				<input
					placeholder='Email or phone number'
					onChange={emailHandler}
					value={emailInput}
					type='email'
				/>
				<input
					onChange={passwordHandler}
					placeholder='Password'
					value={passwordInput}
					type='password'
				/>
				<button type='submit' onClick={signIn}>
					Sign In
				</button>
				<h5 className='signupScreen__gray'>Need help?</h5>
				<h4>
					<span className='signupScreen__gray'>New to Netflix? </span>
					<span className='signupScreen__link' onClick={register}>
						Sign up now.
					</span>
				</h4>
				<h6 className='signupScreen__gray'>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
				</h6>
			</form>
		</div>
	);
};

export default SignupScreen;
