import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },

    deleteTask: (state, action) => {
      //   state.task.splice(action.payload, 1);
      state.task = state.task.filter(
        (curTask, index) => index !== action.payload
      );
    },
  },
});

const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  },
});

export const { addTask, deleteTask } = taskReducer.actions;

export default store;
