import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import classes from "./SignupScreen.module.css";
const SignupScreen = () => {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const register = (e) => {
		e.preventDefault();
		if (emailInput && passwordInput) {
			auth
				.createUserWithEmailAndPassword(emailInput, passwordInput)
				.then((authUser) => {
					if (authUser) {
						navigate("/profile");
					}
				})
				.catch((e) => {
					return setErrorMessage("Please enter valid email and Password");
				});
		} else {
			setError(true);
			setErrorMessage("please fill all the details");
		}
	};
	const signIn = (e) => {
		e.preventDefault();
		if (emailInput && passwordInput) {
			auth
				.signInWithEmailAndPassword(emailInput, passwordInput)
				.then((authUser) => console.log(authUser))
				.catch((e) => {
					return setErrorMessage("Incorrect email or Password");
				});
		} else {
			setError(true);
			setErrorMessage("please fill all the details");
		}
	};
	const emailHandler = (e) => {
		setEmailInput(e.target.value);
	};
	const passwordHandler = (e) => {
		setPasswordInput(e.target.value);
	};

	return (
		<div className={classes.signupScreen}>
			<form>
				<h1>Sign In</h1>
				<input
					className={`${error && classes.inputField}`}
					placeholder='Email or phone number'
					onChange={emailHandler}
					value={emailInput}
					type='email'
				/>
				<input
					className={`${error && classes.inputField}`}
					onChange={passwordHandler}
					placeholder='Password'
					value={passwordInput}
					type='password'
				/>
				<button type='submit' onClick={signIn}>
					Sign In
				</button>
				<h5 className={classes.signupScreen__gray}>Need help?</h5>
				{error && (
					<span className={classes.signupScreen__errorMessage}>
						{errorMessage}
					</span>
				)}
				<h4>
					<span className={classes.signupScreen__gray}>New to Netflix? </span>
					<span className={classes.signupScreen__link} onClick={register}>
						Sign up now.
					</span>
				</h4>
				<h6 className={classes.signupScreen__gray}>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
				</h6>
			</form>
		</div>
	);
};

export default SignupScreen;
