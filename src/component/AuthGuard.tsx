import { Navigate, Outlet } from 'react-router-dom';

import useIsAuth from '../hooks/useIsAuth';

const AuthGuard = () => {
  const isAuth = useIsAuth();
  if (!isAuth) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};

export default AuthGuard;
