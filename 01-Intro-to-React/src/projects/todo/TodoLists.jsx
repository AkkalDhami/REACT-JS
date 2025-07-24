import { RiCheckboxBlankCircleLine, RiDeleteBin7Line } from "react-icons/ri";

const TodoLists = ({ key, task, handleDeletetask }) => {
  return (
    <div
      key={key}
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
  );
};

export default TodoLists;
