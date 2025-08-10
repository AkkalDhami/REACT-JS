import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, fetchTodos } from "../store";



const Todo = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task.trim()));
    setTask("");
  };

  const fetchTasks = () => {
    console.log("fetching tasks");
    dispatch();
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button onClick={fetchTasks} type="button">
          Fetch Todos
        </button>
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
