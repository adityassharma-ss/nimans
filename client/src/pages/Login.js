
import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/GlobalState';
import { useEffect } from 'react';
import "../styles/Login.css"

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	//Using global state
	const { token, updateToken, updateUser } = useContext(GlobalContext);

	if (token) {
		history.push('/profile');
	}

	const submitData = (e) => {
		e.preventDefault();
		console.log(email, password);
		Axios.post(`${process.env.REACT_APP_API_URL}/login`, {
			email,
			password,
		})
			.then((res) => {
				console.log(res.data);
				localStorage.setItem('token', res.data.token);
				updateToken(res.data.token);
				updateUser(res.data.user);
				history.push('/profile');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
		<div className="login">
		<h1 className="signup-board"> Login</h1>
		<div className='form'>
			<input
			    className='in1'
				type="text"
				name="email"
				label="Enter your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<input
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button type="submit" onClick={(e) => submitData(e)}>
				Login
			</button>
		</div>
		</div>
		</>
	);
};

export default Login;