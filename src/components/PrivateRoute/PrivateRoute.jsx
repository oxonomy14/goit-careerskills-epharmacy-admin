// src/PrivateRoute

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsLoading,
  selectIsRefreshing,
} from '../../redux/auth/authSelector';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
