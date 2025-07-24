import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiDeleteBin7Line,
} from "react-icons/ri";

const TodoLists = ({ task, handleDeletetask, onHandleCheckedTaks }) => {
  return (
    <div className="flex gap-3 items-center  justify-between w-full text-white px-3 py-1 border border-zinc-500/30 hover:border-green-500/40 duration-200 rounded">
      <p
        className={
          task.status === "completed" ? "line-through text-zinc-400" : ""
        }>
        {task.text}
      </p>

      <div className="flex gap-2 justify-between">
        <button
          onClick={() => onHandleCheckedTaks(task)}
          className={`p-2 text-xl cursor-pointer ${
            task.status === "completed"
              ? "text-green-500"
              : "text-zinc-400 hover:text-green-500 "
          }`}>
          {task.status !== "completed" ? (
            <RiCheckboxBlankCircleLine />
          ) : (
            <RiCheckboxCircleFill />
          )}
        </button>
        <button
          onClick={() => handleDeletetask(task.id)}
          className="p-2 text-xl cursor-pointer text-zinc-400 hover:text-red-500">
          <RiDeleteBin7Line />
        </button>
      </div>
    </div>
  );
};

export default TodoLists;
