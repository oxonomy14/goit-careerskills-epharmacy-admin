import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
/* import { useState } from 'react'; */
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx';
import Loader from './components/Loader/Loader';
import SharedLayout from './components/SharedLayout/SharedLayout';
import {
  selectToken,
  selectIsRefreshing,
  selectUser,
} from './redux/auth/authSelector.js';
import { refreshUser } from './redux/auth/authOperations';
import { selectIsLoggedIn } from './redux/auth/authSelector.js';

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const DashboardPage = lazy(
  () => import('./pages/DashboardPage/DashboardPage.jsx'),
);
const CustomersDataPage = lazy(
  () => import('./pages/CustomersDataPage/CustomersDataPage'),
);

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  /*  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]); */

  if (isRefreshing) {
    return <Loader />;
  }

  console.log('App-isLoggedIn:', isLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/customers" element={<CustomersDataPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
}

export default App;
