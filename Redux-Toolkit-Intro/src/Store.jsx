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
      state.task.splice(action.payload, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    taskReducer,
  },
});

export const { addTask, deleteTask } = taskReducer.actions;

console.log(taskReducer);

export default store;
