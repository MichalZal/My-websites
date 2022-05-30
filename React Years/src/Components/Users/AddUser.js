import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();

		if (enteredAge.trim().length === 0 || enteredAge.trim().length === 0) {
			setEnteredUsername("");
			setEnteredAge("");
			setError({
				title: "Invalid input",
				message: "Please set the name and age!",
			});
			return;
		}

		if (+enteredAge < 1) {
			setEnteredUsername("");
			setEnteredAge("");
			setError({
				title: "Invalid Age",
				message: "Please enter a valid age (age > 0)!",
			});
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const handleNameChange = (e) => {
		setEnteredUsername(e.target.value);
	};
	const handleAgeChange = (e) => {
		setEnteredAge(e.target.value);
	};
	const errorHandler = (e) => {
		setError(null);
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						onChange={handleNameChange}
						id="username"
						type="text"
						name="username"
						value={enteredUsername}
					></input>

					<label htmlFor="age">Age (years)</label>
					<input
						onChange={handleAgeChange}
						id="age"
						type="number"
						name="age"
						value={enteredAge}

					></input>
					<Button className={classes.btn} type="submit">
						Add User
					</Button>
				</form>
			</Card>
		</div>
	);
};


export default AddUser;
