import React from 'react';

export const AuthContext = React.createContext();

export const initAuthState = {
    isLogin: false,
    userName: null,
    token: null
};

export const AuthReducer = (state, action) => {
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