import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
const TodoForm = () => {
  const [todo, setTodo] = useState({});
  const { addTodo } = useTodo();

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    console.log(todo);
    addTodo({
      todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex">
      <input
        value={todo.todo}
        onChange={handleInputChange}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
