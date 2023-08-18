import { useState } from 'react';

import { signIn } from '@/service/cognito';

export const SignIn = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleOnSignIn = () => {
		try {
			signIn({ username, password });
			window.alert("You've signed in!");
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
