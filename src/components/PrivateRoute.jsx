import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../utils/authContext';
import { auth } from '../utils/firebase';

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const ADMIN_EMAIL = 'admin@admin.com';
  const isAdmin = user?.email === ADMIN_EMAIL;
  const isAuth = !!auth;

  if (isAuth && isAdmin) {
    <Navigate to="/admin" replace />;
    return children;
  }
  if (isAuth && isAdmin) {
    <Navigate to="/admin" replace />;
    return children;
  }
  if (!isAuth && !isAdmin) {
    return <Navigate to="/forbidden" replace />;
  }
};
export default PrivateRoute;
