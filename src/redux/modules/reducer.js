import { createSlice } from '@reduxjs/toolkit';

export const update_select1 = (selected) => {
  return {
    type: UPDATE1,
    selected: selected,
  };
};

export const update_select2 = (selected) => {
  return {
    type: UPDATE2,
    selected: selected,
  };
};

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
