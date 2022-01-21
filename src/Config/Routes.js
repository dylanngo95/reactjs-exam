import React from 'react';

const Home = React.lazy(() => import('../Pages/Home/Home'));
const Page404 = React.lazy(() => import('../Pages/Page404/Page404'));
const Login = React.lazy(() => import('../Pages/Login/Login'));


export const routes = [
    {
        path: '/login',
        component: Login,
        isPrivate: false
    },
    {
        path: '/',
        component: Home,
        isPrivate: true,
    },
    {
        path: '/*',
        component: Page404,
        isPrivate: false,
    }
];