import { createStore } from "redux";
// import { composeWiqthDevTools } from "@redux-devtools/extension";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

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
    default:
      return state;
  }
};

const store = createStore(taskReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

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

export { addTask, deleteTask };

export default store;
