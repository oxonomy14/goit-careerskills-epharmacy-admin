import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Loader from './components/Loader/Loader';
import SharedLayout from './components/SharedLayout/SharedLayout';

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<SharedLayout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
}

export default App;
