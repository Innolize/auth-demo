import { useContext, useState } from 'react';

import { authContext } from '@/context/authContext';
import { signIn } from '@/service/cognito';

export const SignIn = () => {
	const auth = useContext(authContext);

	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleOnSignIn = async () => {
		try {
			const user = await signIn({ username, password });
			auth.handleLogIn(user);
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
