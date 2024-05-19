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

/**
 * Check if it's past 6 AM and reset the value if it is.
 * @param {Object} state
 * @param {number} state.value
 */
const checkAndResetAtSixAM = (state) => {
  const now = new Date();
  const lastResetTimeStr = localStorage.getItem(LAST_RESET_TIME);
  const lastResetTime = lastResetTimeStr ? new Date(lastResetTimeStr) : null;

  // If there's no record of the last reset time or it's a new day past 6 AM
  if (
    !lastResetTime ||
    now.getDate() !== lastResetTime.getDate() ||
    now.getHours() >= 6
  ) {
    state.value = 0;
    localStorage.setItem(LAST_RESET_TIME, now.toISOString());
  }
};

const localTotalFocusTimeStr = localStorage.getItem(SLICE_NAME);

const initialState = localTotalFocusTimeStr
  ? { value: Number(JSON.parse(localTotalFocusTimeStr)) }
  : { value: 0 };

// Check and reset if necessary when the application starts
const preloadedState = { ...initialState };
checkAndResetAtSixAM(preloadedState);

export const totalFocusTimeSlice = createSlice({
  name: SLICE_NAME,
  initialState: preloadedState,
  reducers: {
    increment: (state) => {
      // Ensure the state is checked and reset if needed before incrementing
      checkAndResetAtSixAM(state);
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
