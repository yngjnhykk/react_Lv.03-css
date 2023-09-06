import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  select1: '리액트',
  select2: '리액트',
};

const counterSlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    UPDATE1: (state, action) => {
      state.select1 = action.selected;
    },

    UPDATE2: (state, action) => {
      state.select2 = action.selected;
    },
  },
});

export const { UPDATE1, UPDATE2 } = counterSlice.actions;
export default counterSlice.reducer;
