import { createSlice } from "@reduxjs/toolkit";

export const totalFocusTimeSlice = createSlice({
  name: "totalFocusTime",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    initialize: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, initialize } = totalFocusTimeSlice.actions;

export default totalFocusTimeSlice.reducer;
