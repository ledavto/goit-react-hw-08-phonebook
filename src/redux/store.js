import { configureStore } from '@reduxjs/toolkit';

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
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { userReducer } from './user/userSlice';
import { filterReducer } from './filter/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

// export const store = configureStore({
//   reducer,
// });

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {user: userReducer,
  filter: filterReducer,
  auth: persistedReducer
},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
