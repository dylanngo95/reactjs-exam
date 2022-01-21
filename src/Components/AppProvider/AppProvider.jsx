import { useReducer } from 'react';
import { AuthContext, AuthReducer, initAuthState } from "../../Context/AuthContext";
import { HomeContext, initialHomeState } from "../../Context/HomeContext";

const AppProvider = ({ children }) => {

    let [stateAuth, dispatchAuth] = useReducer(
        AuthReducer,
        initAuthState,
        (initial) => JSON.parse(localStorage.getItem('auth')) || initial
    );

    return (
        <AuthContext.Provider value={{ auth: stateAuth, dispatch: dispatchAuth }}>
            <HomeContext.Provider value={{ customers: initialHomeState }}>
                {children}
            </HomeContext.Provider>
        </AuthContext.Provider>
    );
}

export default AppProvider;