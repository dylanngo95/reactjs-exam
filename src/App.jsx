import React, { useReducer } from 'react';
import { routes } from './Config/Routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './Components/AppRouter/AppRouter';
import { HomeContext, HomeReducer, initialHomeState } from './Context/HomeContext';
import { AuthContext, AuthReducer, initAuthState } from './Context/AuthContext';
import './App.css';

const App = () => {
  let [stateCount, dispatchCount] = useReducer(HomeReducer, initialHomeState);
  let [stateAuth, dispatchAuth] = useReducer(
    AuthReducer,
    initAuthState,
    (initial) => JSON.parse(localStorage.getItem('auth')) || initial
  );

  return (
    <AuthContext.Provider value={{ auth: stateAuth, dispatch: dispatchAuth }}>
      <HomeContext.Provider value={{ count: stateCount, dispatch: dispatchCount }}>
        <BrowserRouter>
          <Routes>
            {
              routes.map(route => {
                return <Route
                  key={route.path}
                  path={route.path}
                  element={<AppRouter
                    component={route.component}
                    isPrivate={route.isPrivate}
                  />}
                />
              })
            }
          </Routes>
        </BrowserRouter>
      </HomeContext.Provider>
    </AuthContext.Provider >
  );
}

export default App;
