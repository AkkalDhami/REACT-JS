import { applyMiddleware, createStore } from "redux";
import { getTodos } from "./api/TodoApi";

import { thunk } from "redux-thunk";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch";

const tinitialState = {
  task: [],
  isLoading: false,
};

const taskReducer = (state = tinitialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        task: state.task.filter((curTask, index) => index !== action.payload),
      };

    case FETCH_TASKS:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.(applyMiddleware(thunk))
);

const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index,
  };
};

const fetchTodos = () => {
  console.log("Thunk is working");
  return async (dispatch) => {
    try {
      const todos = await getTodos();
      console.log(todos);
      dispatch({ type: FETCH_TASKS, payload: todos.data.map((t) => t.title) });
    } catch (error) {
      console.log(error);
    }
  };
};

export { addTask, deleteTask, fetchTodos };

export default store;
