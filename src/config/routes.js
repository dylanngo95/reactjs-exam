import Home from '../pages/home/Home';
import Page404 from '../pages/page404/Page404';
import Login from '../pages/login/Login';

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
        path: '/404',
        component: Page404,
        isPrivate: true,
    }
];