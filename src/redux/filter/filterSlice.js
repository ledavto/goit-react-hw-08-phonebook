import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filterReducer',
  initialState,
  reducers: {
    filterStrAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterStrAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
