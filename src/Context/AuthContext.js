import React from 'react';

/** Context */
export const AuthContext = React.createContext();

export const initAuthState = {
    isLogin: false,
    userName: null,
    token: null
};

/** Reducer */
export const AuthReducer = (state, action) => {
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

/** Action */
export const LoginAction = (dispatch, name) => {

    const HOST = 'https://api.github.com/users/dylanngo95'

    fetch(HOST)
        .then(res => res.json())
        .then(result => {
            console.log('login', result);
            dispatch({
                type: 'LOGIN_SUCCESS',
                data: {
                    userName: name,
                    token: result.node_id
                }
            })

        })
        .catch(error => {
            console.log('login error', error);
            dispatch({
                type: 'LOGIN_ERROR',
                data: {
                }
            })
        });
}