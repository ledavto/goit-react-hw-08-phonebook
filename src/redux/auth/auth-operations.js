import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Регистрация клиента
export const fetchRegister = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const response = await axios.post('/users/signup', credentials);
      // token(set(response.data.token))
      // console.log('REG POST', response.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Логин клиента
export const fetchLogin = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    // token(set(response.data.token))
    // console.log('LOGIN POST', response.data.token);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
  }
});

//Выход - LogOut
export const fetchLogOut = createAsyncThunk(
  'auth/logout',
  async credentials => {
    try {
      await axios.post('/users/logout', credentials);
      // token(unset())
      axios.defaults.headers.common.Authorization = ``;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Обновление страницы
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    //проверяем есть ли TOKEN в локалсторедже
    if (state.auth.token === null) {
      console.log(state);
      return thunkAPI.rejectWithValue('Error refresh token');
    }

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${state.auth.token}`;
      const response = await axios.get('/users/current');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
