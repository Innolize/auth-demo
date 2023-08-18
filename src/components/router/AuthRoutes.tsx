import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { authContext } from '@/context/authContext';

export const AuthRoutesGuard = () => {
	const { user } = useContext(authContext);
	return user ? <Navigate to="/" /> : <Outlet />;
};
