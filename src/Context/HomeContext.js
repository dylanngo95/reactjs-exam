import React from 'react';

export const HomeContext = React.createContext();

export const initialHomeState = [
    {
        id: 0,
        image: 'post.jpg',
        name: 'Sarah Dayan',
        price: 50,
        inStock: true
    },
    {
        id: 1,
        image: 'post6.jpg',
        name: 'Nuno Maduro',
        price: 500,
        inStock: true
    },
    {
        id: 2,
        image: 'post2.jpg',
        name: 'Guillermo Rauch',
        price: 99,
        inStock: true
    },
    {
        id: 3,
        image: 'post3.jpg',
        name: 'Greg Sullivan',
        price: 75,
        inStock: true
    },
    {
        id: 4,
        image: 'post4.jpg',
        name: 'Jake Ryan Smith',
        price: 500,
        inStock: true
    }
];