import { useReducer } from 'react';
import { AuthContext, AuthReducer, initAuthState } from "../../Context/AuthContext";
import { HomeContext, HomeReducer, initialHomeState } from "../../Context/HomeContext";

const AppProvider = ({ children }) => {

    let [stateCount, dispatchCount] = useReducer(HomeReducer, initialHomeState);
    let [stateAuth, dispatchAuth] = useReducer(
        AuthReducer,
        initAuthState,
        (initial) => JSON.parse(localStorage.getItem('auth')) || initial
    );

    return (
        <AuthContext.Provider value={{ auth: stateAuth, dispatch: dispatchAuth }}>
            <HomeContext.Provider value={{ count: stateCount, dispatch: dispatchCount }}>
                {children}
            </HomeContext.Provider>
        </AuthContext.Provider>
    );
}

export default AppProvider;