
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";
import TodoDateTime from "./TodoDateTime";
const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (inputValue) => {
    if (!inputValue) return;
    if (tasks.includes(inputValue)) return;
    setTasks((prevTasks) => [...prevTasks, inputValue]);
  };

  const handleDeletetask = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((t) => t !== task);
    });
  };

  return (
    <section className="text-white p-12 rounded max-w-xl w-full">
      <header className="flex flex-col justify-center gap-3 text-white p-2 rounded">
        <h1 className="text-2xl">Todo App</h1>
        <TodoDateTime />
      </header>

      <TodoForm onAddTask={handleSubmit} />

      <section className="p-2">
        {tasks.length > 0 ? (
          <button
            onClick={() => setTasks([])}
            className="p-2 text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white duration-200 cursor-pointer rounded-lg">
            Clear All
          </button>
        ) : (
          ""
        )}
      </section>

      <section className="flex flex-col gap-3 items-center justify-center w-full text-white p-2 rounded">
        {tasks.map((task, index) => (
          <TodoLists
            key={index}
            task={task}
            handleDeletetask={handleDeletetask}
          />
        ))}
      </section>
    </section>
  );
};

export default Todo;
