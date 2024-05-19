import { configureStore } from "@reduxjs/toolkit";
import totalFocusTimeReducer from "../features/totalFocusTime/totalFocusTimeSlice";

export default configureStore({
  reducer: {
    totalFocusTime: totalFocusTimeReducer,
  },
});
