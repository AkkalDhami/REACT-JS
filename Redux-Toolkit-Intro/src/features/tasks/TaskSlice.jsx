import { createSlice } from "@reduxjs/toolkit";

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
      state.task = state.task.filter(
        (curTask, index) => index !== action.payload
      );
    },
  },
});

export const { addTask, deleteTask } = taskReducer.actions;
export default taskReducer.reducer;
