import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsLoading,
  selectIsRefreshing,
} from '../../redux/auth/authSelector';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return null; // або Loader
  }

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
