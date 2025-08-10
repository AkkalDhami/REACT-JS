import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../Store";

const Todo = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.taskReducer.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task.trim()));
    setTask("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          placeholder="Add Task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos?.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
