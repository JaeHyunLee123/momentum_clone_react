import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "totalFocusTime";
const LAST_RESET_TIME = "lastResetTime";

/**
 *
 * @param {Object} state
 * @param {number} state.value
 */
const updateLocalStorage = (state) => {
  localStorage.setItem(SLICE_NAME, JSON.stringify(state.value));
};

const localTotalFocusTimeStr = localStorage.getItem(SLICE_NAME);

const initialState = localTotalFocusTimeStr
  ? { value: Number(JSON.parse(localTotalFocusTimeStr)) }
  : { value: 0 };

export const totalFocusTimeSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      updateLocalStorage(state);
    },
    initialize: (state) => {
      // Explicitly set the value to 0 and update localStorage
      state.value = 0;
      updateLocalStorage(state);
    },
  },
});

export const { increment, initialize } = totalFocusTimeSlice.actions;

export default totalFocusTimeSlice.reducer;
