import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { authContext } from '@/context/authContext';

export const ProtectedRoutesGuard = () => {
	const { user } = useContext(authContext);
	return user ? <Outlet /> : <Navigate to="/sign-in" />;
};
