import { createBrowserRouter } from 'react-router-dom';

import { AuthRoutesGuard } from '@/guard/AuthRoutes';
import { ProtectedRoutesGuard } from '@/guard/ProtectedRoutes';
import { SignIn } from '@/pages/sign-in';
import { SignUp } from '@/pages/sign-up';

import Root from '@pages/Root';
import About from '@pages/about/About';
import Home from '@pages/home/Home';

const publicRoutes = [
	{
		element: <AuthRoutesGuard />,
		children: [
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/sign-in',
				element: <SignIn />,
			},
		],
	},
];

const protectedRoutes = [
	{
		path: '/',
		element: <ProtectedRoutesGuard />,
		children: [
			{
				path: '/',
				element: <Root />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: '/about',
						element: <About />,
					},
				],
			},
		],
	},
];

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

export default router;
