import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/GlobalState';
import '../styles/SignUp.css';

const SignUp = () => {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const history = useHistory();

	const { token } = useContext(GlobalContext);

	if (token) {
		history.push('/profile');
	}

	const submitData = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setErrorMessage("Passwords don't match");
			return;
		}

		try {
			const res = await Axios.post(`${process.env.REACT_APP_API_URL}/register`, {
				name,
				gender,
				email,
				password,
			});
			console.log(res.data);
			history.push('/signin');
		} catch (err) {
			console.log(err);
			setErrorMessage('Something went wrong. Please try again later.');
		}
	};

	return (
		<div className="signup-container">
			<h1 className="signup-board"> Sign Up</h1>
			<form onSubmit={submitData}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<label htmlFor="gender">Gender</label>
				<select
					name="gender"
					id="gender"
					value={gender}
					onChange={(e) => setGender(e.target.value)}
					required
				>
					<option value="">Select Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>

				<button type="submit">Sign Up</button>

				{errorMessage && <p className="error-message">{errorMessage}</p>}
			</form>
		</div>
	);
};

export default SignUp;
