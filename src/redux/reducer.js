import { userReducer } from './user/userSlice';
import { filterReducer } from './filter/filterSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
});
