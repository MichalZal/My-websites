import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";

import LoadingSpinner from "../UI/LoadingSpinner";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [loading, setIsLoading] = useState(false);
	const authCtx = useContext(AuthContext);
	const history = useHistory();

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredPassword = passwordInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;

		setIsLoading(true);
		let url;
		if (isLogin) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_KsxbK981IH6ky97lLWpBsZpSeOLAfE4";
		} else {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_KsxbK981IH6ky97lLWpBsZpSeOLAfE4";
		}
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => {
				setIsLoading(false);

				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						let errorMessage = "Authentication failed!";
						if (data && data.error && data.error.message) {
							errorMessage = data.error.message;
						}
						alert(errorMessage);
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				const expirationTime = new Date(
					new Date().getTime() + +data.expiresIn * 1000
				);
				authCtx.login(data.idToken, expirationTime.toISOString());
				history.replace("/");
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input ref={emailInputRef} type="email" id="email" required />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						ref={passwordInputRef}
						type="password"
						id="password"
						required
					/>
				</div>
				<div className={classes.actions}>
					{!loading && <button>{isLogin ? "Login" : "Create Account"}</button>}
					{loading && (
						<div className="center">
							<LoadingSpinner />
						</div>
					)}
					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
