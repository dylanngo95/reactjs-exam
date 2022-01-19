import React from 'react';

export const CounterContext = React.createContext();

export const initialCountState = 0;

export const Reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialCountState;
        default:
            return state;
    }
}