import { createContext, useContext, useEffect, useState } from 'react';

import { getCurrentSession } from '@/service/cognito';

const authContext = createContext({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getSession = async () => {
			setLoading(true);
			const currentUser = await getCurrentSession();
			console.log('currentUser: ', currentUser);
			setUser(currentUser);
			setLoading(false);
		};
		getSession();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<authContext.Provider value={{ user }}>{children}</authContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(authContext);
};
