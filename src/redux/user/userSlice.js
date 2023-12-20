import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../../redux/operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
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
      .addCase(deleteContact.rejected, handleRejected)

      //Додавання
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected);
  },
  // reducers: {
  //     fetchingInProgress(state) {
  //       state.contacts.isLoading = true;
  //     },
  //     fetchingSuccess(state, action) {
  //       state.contacts.isLoading = false;
  //       state.contacts.error = null;
  //       state.contacts.items = action.payload;
  //     },
  //     fetchingError(state, action) {
  //       state.contacts.isLoading = false;
  //       state.contacts.error = action.payload;
  //     },
  //   },
});

export const userReducer = userSlice.reducer;
