/* eslint-disable no-case-declarations */
import React from 'react';

export const CustomerContext = React.createContext();

/**
 * { id: 0, qty: 1, name: 'Product A' }
 */
export const initCustomerState = [
];

export const CustomerReducer = (state, action) => {
    switch (action.type) {
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
            return state.filter((value, _index) => {
                if (
                    value.id == action.id
                    && value.qty > 1
                ) {
                    value.qty -= action.qty;
                    return value;
                }
                if (value.id != action.id) {
                    return value;
                }
            });
        default:
            throw new Error();
    }
}