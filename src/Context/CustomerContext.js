/* eslint-disable no-case-declarations */
import React from 'react';

export const CustomerContext = React.createContext();

export const initCustomerState = [
    {
        id: 0,
        qty: 1,
        name: 'Product A'
    },
    {
        id: 1,
        qty: 2,
        name: 'Product B'
    }
];

export const CustomerReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            let isCreate = true;
            const newState = state.map((value, _index) => {
                if (value.id == action.id) {
                    value.qty += action.qty;
                    isCreate = false;
                }
                return value;
            });
            if (isCreate) {
                newState.push({
                    id: action.id,
                    name: action.name,
                    qty: action.qty
                });
            }
            return newState;
        case 'REMOVE_PRODUCT':
                return state.map((value, _index) => {
                    if (value.id == action.id) {
                        value.qty -= action.qty;
                    }
                });
        default:
            throw new Error();
    }
}