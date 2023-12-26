import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './user-operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  // console.log('state', state)
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,

  extraReducers: builder => {
    builder
      //Запит списку
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      //Видалення
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          cont => cont.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)}
});

export const userReducer = userSlice.reducer;
