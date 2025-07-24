import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const TodoForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({
      id: Date.now(),
      text: value,
      status: "pending",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.text.trim()) return;
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-3 text-white p-2 rounded ">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add Todo"
            className="px-4 py-3 outline-none w-full rounded-lg border border-zinc-500/30 focus:border-green-500"
            value={inputValue.text}
            onChange={(e) => handleInputChange(e.target.value)}></input>
          <button
            type="submit"
            className="bg-gradient-to-br from-35% from-indigo-500 via-purple-500 to-pink-600 text-white font-bold py-2 px-3 text-3xl rounded-lg cursor-pointer">
            <MdAddCircleOutline />
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
