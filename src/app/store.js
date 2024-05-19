import { configureStore } from "@reduxjs/toolkit";
import totalFocusTimeReducer from "../features/totalFocusTime/totalFoucusTimeSlice";

export default configureStore({
  reducer: {
    totalFocusTime: totalFocusTimeReducer,
  },
});
