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

  const updateTime = Date.now();
  localStorage.setItem(LAST_RESET_TIME, JSON.stringify(updateTime));
};

/** 매 6시에 값 초기화 */
const checkLastUpdate = () => {
  const INTIALIZE_TIME = 6;

  const lastUpdateTime = new Date(localStorage.getItem(LAST_RESET_TIME));

  const currentTime = new Date();

  //초기화 하는 경우 -> 오늘 6시가 지났는데 마지막 업데이트가 오늘 6시 이전일 때
  if (currentTime.getHours() >= INTIALIZE_TIME) {
    if (
      lastUpdateTime.getHours() < INTIALIZE_TIME ||
      lastUpdateTime.getDate() < currentTime.getDate()
    ) {
      localStorage.setItem(SLICE_NAME, JSON.stringify(0));
    }
  }
};

checkLastUpdate();

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
