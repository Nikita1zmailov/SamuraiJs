import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout/Layout';
import { News, Settings } from '../pages';
import DialogsContainer from '../pages/Dialogs/DialogsContainer';
import UsersContainer from '../pages/Users/UsersContainer';
import ProfileContainer from '../pages/Profile/ProfileContainer';
import Login from '../components/Login/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <div>Error page</div>,
		children: [
			{
				path: 'dialogs',
				element: <DialogsContainer />,
				children: [
					{
						path: '/dialogs/1',
					},
					{
						path: '/dialogs/2',
					},
					{
						path: '/dialogs/3',
					},
					{
						path: '/dialogs/4',
					},
					{
						path: '/dialogs/5',
					},
				],
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'registration',
				element: <Login />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
			{
				path: 'users',
				element: <UsersContainer />,
			},
			{
				path: 'news',
				element: <News />,
			},
			{
				path: '/profile',
				element: <ProfileContainer />,
				children: [
					{
						path: '/profile/:userId',
					},
				],
			},
		],
	},
]);
export default router;
