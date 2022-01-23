import React from 'react';

const Home = React.lazy(() => import('../Pages/Home/Home'));
const Page404 = React.lazy(() => import('../Pages/Page404/Page404'));
const Login = React.lazy(() => import('../Pages/Login/Login'));
const ProductDetail = React.lazy(() => import('../Pages/ProductDetail/ProductDetailNew'));
const Cart = React.lazy(() => import('../Pages/Cart/Cart'));


export const routes = [
    {
        path: '/cart',
        component: Cart,
        isPrivate: true
    },
    {
        path: '/product-detail/:productId',
        component: ProductDetail,
        isPrivate: true
    },
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