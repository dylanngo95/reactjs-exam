import React from 'react';

export const HomeContext = React.createContext();

export const initialHomeState = 0;

export const HomeReducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialHomeState;
        default:
            return state;
    }
}