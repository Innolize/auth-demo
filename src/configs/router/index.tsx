import { createBrowserRouter } from 'react-router-dom';

import { SignUp } from '@/pages/sign-up';

import Root from '@pages/Root';
import About from '@pages/about/About';
import Home from '@pages/home/Home';

const router = createBrowserRouter([
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
			{
				path: '/sign-up',
				element: <SignUp />,
			},
		],
	},
]);

export default router;
