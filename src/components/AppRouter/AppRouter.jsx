import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { LoginContext } from '../../context/LoginConext';

const AppRouter = () => {
  const {stateLogin, dispatch} = useContext(LoginContext);

  return (
    <p>App route</p>
  );
}

export default AppRouter;