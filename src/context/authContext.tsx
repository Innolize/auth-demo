import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { createContext, useEffect, useState } from 'react';

import { getCurrentSession } from '@/service/cognito';

interface IAuthContext {
	user: CognitoUserSession | null;
	handleLogIn: (user: CognitoUserSession | null) => void;
}

export const authContext = createContext<IAuthContext>({
	user: null,
	handleLogIn: (user: CognitoUserSession | null) =>
		console.log('handle log not implemented'),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<CognitoUserSession | null>(null);
	const [loading, setLoading] = useState(true);

	const handleLogIn = (user: CognitoUserSession | null) => {
		setUser(user);
	};

	useEffect(() => {
		const getSession = async () => {
			setLoading(true);
			const currentUser = await getCurrentSession();
			if (currentUser) {
				setUser(currentUser);
				setLoading(false);
			} else {
				setLoading(false);
				setUser(null);
			}
		};
		getSession();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<authContext.Provider value={{ user, handleLogIn }}>
			{children}
		</authContext.Provider>
	);
};
