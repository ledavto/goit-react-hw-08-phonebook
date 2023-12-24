import { createSlice } from "@reduxjs/toolkit";
import { fetchLogOut, fetchLogin, fetchRegister } from "./auth-operations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
}


const handlePending = state => {
  
};

const handleRejected = (state, action) => {

};

const authSlice = createSlice({
    name: "authReducer",
    initialState,
    extraReducers: builder => {
        builder
            //Регистрация
            .addCase(fetchRegister.pending, handlePending)
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(fetchRegister.rejected, handleRejected)
        //Регистрация
        .addCase(fetchLogin.pending, handlePending)
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(fetchLogin.rejected, handleRejected)
        
        //Log OUT
        .addCase(fetchLogOut.pending, handlePending)
            .addCase(fetchLogOut.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.user = {name:null, email:null};
                state.token = null;
            })
            .addCase(fetchLogOut.rejected, handleRejected)
    }
});

export const authReducer = authSlice.reducer 