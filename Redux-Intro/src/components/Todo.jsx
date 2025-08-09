import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.task);
  console.log(todos);
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <input type="text" placeholder="Add Task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos?.map((task, index) => (
            <li key={index}>
                {task} <button>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
