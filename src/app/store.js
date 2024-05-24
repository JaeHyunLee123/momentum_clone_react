import { configureStore } from "@reduxjs/toolkit";
import totalFocusTimeReducer from "../features/totalFocusTime/totalFocusTimeSlice";
import todoReducer from "../features/todo/todoSlice";

export default configureStore({
  reducer: {
    totalFocusTime: totalFocusTimeReducer,
    todo: todoReducer,
  },
});
