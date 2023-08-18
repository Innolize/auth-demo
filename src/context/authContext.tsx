import { createContext, useEffect, useState } from 'react';

import { getCurrentSession } from '@/service/cognito';

interface IUserTokens {
	accessToken: string;
	refreshToken: string;
	idToken: string;
}

interface IAuthContext {
	user: any;
	handleLogIn: (user: any) => void;
}

export const authContext = createContext({
	user: null,
	handleLogIn: (user: IUserTokens) => console.log('handle log not implemented'),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const handleLogIn = (user: any) => {
		setUser(user);
	};

	useEffect(() => {
		const getSession = async () => {
			setLoading(true);
			const currentUser = await getCurrentSession();
			console.log('currentUser: ', currentUser);
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
