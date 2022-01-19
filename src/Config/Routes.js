import Home from '../Pages/Home/Home';
import Page404 from '../Pages/Page404/Page404';
import Login from '../Pages/Login/Login';

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