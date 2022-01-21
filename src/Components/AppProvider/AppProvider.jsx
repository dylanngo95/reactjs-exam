import { useReducer } from 'react';
import { AuthContext, AuthReducer, initAuthState } from "../../Context/AuthContext";
import { HomeContext, initialHomeState } from "../../Context/HomeContext";
import { CustomerContext, CustomerReducer, initCustomerState } from '../../Context/CustomerContext';

const AppProvider = ({ children }) => {

    let [stateAuth, dispatchAuth] = useReducer(
        AuthReducer,
        initAuthState,
        (initial) => JSON.parse(localStorage.getItem('auth')) || initial
    );

    let [customer, dispatchCustomer] = useReducer(
        CustomerReducer,
        initCustomerState,
        (initial) => JSON.parse(localStorage.getItem('customer')) || initial
    );

    return (
        <AuthContext.Provider value={{ auth: stateAuth, dispatchAuth: dispatchAuth }}>
            <CustomerContext.Provider value={{customer: customer, dispatchCustomer: dispatchCustomer}}>
                <HomeContext.Provider value={{ products: initialHomeState }}>
                    {children}
                </HomeContext.Provider>
            </CustomerContext.Provider>
        </AuthContext.Provider>
    );
}

export default AppProvider;