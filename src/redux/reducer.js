import { userReducer } from './user/userSlice';
import { filterReducer } from './filter/filterSlice';
import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
  auth: authReducer,
});
