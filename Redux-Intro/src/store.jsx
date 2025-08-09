import { createStore } from "redux";

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

const store = createStore(taskReducer);

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

store.dispatch(addTask("Task 1"));
console.log(store.getState());


export default store;
