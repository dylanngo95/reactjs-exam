import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const AppRouter = ({ component: Component, isPrivate }) => {
  const { auth, _dispatch } = useContext(AuthContext);
  const location = useLocation();

  if (
    !auth.isLogin
    && isPrivate
  ) {
    return (
      <Navigate to={'/login'} state={{ from: location }} replace />
    );
  }

  return (
    <React.Suspense fallback={<>...</>}>
      <Component />
    </React.Suspense>
  );
}

export default AppRouter;