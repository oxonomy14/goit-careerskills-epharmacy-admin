import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

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

const persistAuth = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: (state = {}) => state, // тимчасовий ред’юсер
  /*  reducer: {
    newsList: persistReducer(persistConfigNews, newsReducer),
     auth: persistReducer(persistAuth, authReducer),
  }, */

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);
