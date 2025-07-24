import { useEffect } from "react";
import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { RiCheckboxBlankCircleLine, RiDeleteBin7Line } from "react-icons/ri";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    if (tasks.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTasks((prevTasks) => {
      return [...prevTasks, inputValue];
    });

    setInputValue("");
  };
  const timer = setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      day: "numeric",
      weekday: "long",
      month: "long",
      year: "numeric",
    });
    const formatedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    setDateTime(`${formattedDate} - ${formatedTime}`);
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const handleDeletetask = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((t) => t !== task);
    });
  };

  return (
    <section className="text-white p-12 rounded max-w-xl w-full">
      <header className="flex flex-col justify-center gap-3 text-white p-2 rounded">
        <h1 className="text-2xl">Todo App</h1>
        <h2 className="text-lg text-zinc-300 font-medium">
          {dateTime ? dateTime : "Loading..."}
        </h2>
      </header>

      <section className="flex w-full flex-col items-center justify-center gap-3 text-white p-2 rounded ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add Todo"
              className="px-4 py-3 outline-none w-full rounded-lg border border-zinc-500/30 focus:border-green-500"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}></input>
            <button
              type="submit"
              className="bg-gradient-to-br from-35% from-indigo-500 via-purple-500 to-pink-600 text-white font-bold py-2 px-3 text-3xl rounded-lg cursor-pointer">
              <MdAddCircleOutline />
            </button>
          </div>
        </form>
      </section>

      <section className="p-2">
        {tasks.length > 0 ? (
          
          <button onClick={() => setTasks([])} className="p-2 text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white duration-200 cursor-pointer rounded-lg">Clear All</button>
        ) : ''
        }
      </section>
      
      <section className="flex flex-col gap-3 items-center justify-center w-full text-white p-2 rounded">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex gap-3 items-center  justify-between w-full text-white px-3 py-1 border border-zinc-500/30 hover:border-green-500/40 duration-200 rounded">
            <p>{task}</p>

            <div className="flex gap-2 justify-between">
              <button className="p-2 text-xl cursor-pointer  text-zinc-400 hover:text-green-500">
                {/* <IoCheckmarkCircle /> */}
                <RiCheckboxBlankCircleLine />
              </button>
              <button
                onClick={() => handleDeletetask(task)}
                className="p-2 text-xl cursor-pointer text-zinc-400 hover:text-red-500">
                <RiDeleteBin7Line />
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Todo;
