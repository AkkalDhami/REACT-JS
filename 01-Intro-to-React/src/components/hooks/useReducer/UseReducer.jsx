import { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state <= 0 ? 0 : state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex gap-2 items-center text-white flex-col">
      <h1 className="text-4xl">UseReducer Hook</h1>
      <h2 className="text-2xl">{count}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;
