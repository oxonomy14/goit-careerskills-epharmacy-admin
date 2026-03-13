import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectToken,
  selectIsLoading,
} from '../../redux/auth/authSelector';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) return null;
  /*  return isLoggedIn ? children : <Navigate to="/" />; */
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
