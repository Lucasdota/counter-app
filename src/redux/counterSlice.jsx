import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    reset: (state) => {
      state.value = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { reset, increment } = counterSlice.actions;
export default counterSlice.reducer;
