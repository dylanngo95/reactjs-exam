import React, { useReducer } from 'react';
import { routes } from './config/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';

import { CounterContext, Reducer, initialCountState } from './context/Reducer';
import { LoginContext, LoginReducer, initLoginState } from './context/LoginConext';
import './App.css';

const App = () => {
  let [stateCount, dispatchCount] = useReducer(Reducer, initialCountState);
  let [stateLogin, dispatchLogin] = useReducer(LoginReducer, initLoginState);

  return (
    <CounterContext.Provider
      value={{ count: stateCount, dispatch: dispatchCount }}>
      <LoginContext.Provider value={{ stateLogin: stateLogin, dispatch: dispatchLogin }}>
        <BrowserRouter>
          <Routes>
            {routes.map(route => {
              return <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
            }
            )}
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </CounterContext.Provider>
  );
}

export default App;
