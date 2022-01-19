import React from 'react';

export const LoginContext = React.createContext();

export const initLoginState = {
    isLogin: false,
    userName: null,
    token: null
};

export const LoginReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                userName: action.data.userName,
                token: action.data.token,
                isLogin: true
            }
        case 'LOGIN_ERROR':
                return {
                    ...state,
                    userName: null,
                    token: null,
                    isLogin: false
                }
        case 'LOGOUT':
            return {
                ...state,
                userName: null,
                token: null,
                isLogin: false
            }
        default:
            throw new Error();
    }
}