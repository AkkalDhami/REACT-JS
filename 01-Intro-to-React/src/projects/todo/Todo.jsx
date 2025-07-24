import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";
import TodoDateTime from "./TodoDateTime";
const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleSubmit = (inputValue) => {
    const { id, text, status } = inputValue;
    if (!inputValue.text) return;

    const existingTask = tasks.find(
      (task) => task.text.toLowerCase() === text.toLowerCase()
    );
    if (existingTask) return;
    setTasks((prevTasks) => [...prevTasks, { id, text, status }]);
  };

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const handleDeletetask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((t) => t.id !== id);
    });
  };

  const handleCheckedtask = (task) => {
    if (!task.text) return;
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            status: t.status === "completed" ? "pending" : "completed",
          };
        }
        return t;
      });
    });
  };

  return (
    <section className="text-white p-12 rounded max-w-xl w-full">
      <header className="flex flex-col justify-center gap-3 text-white p-2 rounded">
        <div className="flex items-center justify-between gap-3 text-white p-2 rounded">
          <h1 className="text-2xl">Todo App</h1>
          <h3>Total Tasks: {tasks.length}</h3>
        </div>
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
        {tasks.map((task) => (
          <TodoLists
            key={task.id}
            task={task}
            handleDeletetask={handleDeletetask}
            onHandleCheckedTaks={() => handleCheckedtask(task)}
          />
        ))}
      </section>
    </section>
  );
};

export default Todo;
