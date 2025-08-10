import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/TaskSlice";

const store = configureStore({
  reducer: {
    taskReducer,
  },
});

export default store;
