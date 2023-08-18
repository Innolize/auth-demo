import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn } from '@/service/cognito';

export const SignIn = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleOnSignIn = () => {
		try {
			signIn({ username, password });
			window.alert("You've signed in!");
			navigate('/');
		} catch (error) {
			window.alert('Error: ' + error);
		}
	};

	return (
		<div>
			<h1>Sign in Page</h1>
			<div>
				<label htmlFor="username">
					username
					<input
						name="username"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					></input>
				</label>
				<label htmlFor="password">
					password
					<input
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					></input>
				</label>
				<button onClick={handleOnSignIn}>Sign In</button>
			</div>
		</div>
	);
};
