import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';
import { authReducer } from './auth/authSlice';
import { dashboardReducer } from './dashboard/dashboardSlice';
import { customersReducer } from './customers/customersSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfigAuth = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistConfigDashboard = {
  key: 'dasboard',
  version: 1,
  storage,
};

const persistConfigCustomers = {
  key: 'customers',
  version: 1,
  storage,
  whitelist: ['customers'],
};

const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);
const persistedDashboardReducer = persistReducer(
  persistConfigDashboard,
  dashboardReducer,
);

const persistedCustomersReducer = persistReducer(
  persistConfigCustomers,
  customersReducer,
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    dashboard: persistedDashboardReducer,
    customers: persistedCustomersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);
