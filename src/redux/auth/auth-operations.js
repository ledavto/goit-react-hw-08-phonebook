import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


// const token = {
//   set(token) { axios.defaults.common.Authorization = `Bearer ${token}` },
//   unset() {axios.defaults.common.Authorization=``}
// }

//Регистрация клиента
export const fetchRegister = createAsyncThunk("auth/register", async credentials => {
  try {
    const response = await axios.post("/users/signup", credentials)
    // token(set(response.data.token))
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    return response.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
  }
})

//Логин клиента
export const fetchLogin = createAsyncThunk("auth/login", async credentials => {
  try {
    const response = await axios.post("/users/login", credentials)
    // token(set(response.data.token))
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
      return response.data;
    // console.log('response=>> ', response.data)
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
  }
})

//Выход - LogOut
export const fetchLogOut = createAsyncThunk("auth/logout", async credentials => {
  try {
      const response = await axios.post("/users/logout", credentials)
    // token(unset())
    axios.defaults.headers.common.Authorization = ``
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.message);
  }
})