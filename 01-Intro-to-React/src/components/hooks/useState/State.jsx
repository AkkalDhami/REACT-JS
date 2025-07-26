import { useState } from "react";

const State = () => {
  console.log("Parent Component");
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <div className="flex gap-2 items-center text-white flex-col">
        <h2 className="text-2xl">{count}</h2>
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Reset
        </button>
        <button
          onClick={() => setCount(count <= 0 ? 0 : count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decrement
        </button>

        <ChildComponent count={count} />
      </div>
    </>
  );
};

function ChildComponent({ count }) {
  return (
    <div className="flex gap-2 items-center text-white flex-col">
      <h2 className="text-2xl">Child Component {count}</h2>
    </div>
  );
}


export default State;
