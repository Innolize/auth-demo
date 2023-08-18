import { useState } from 'react';

import { signUp } from '@/service/cognito';

export const SignIn = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
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
				<button onClick={() => signUp({ username, password })}>Sign In</button>
			</div>
		</div>
	);
};
