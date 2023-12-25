import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

// export const store = configureStore({
//   reducer,
// });

const persistedReducer = persistReducer(authPersistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
