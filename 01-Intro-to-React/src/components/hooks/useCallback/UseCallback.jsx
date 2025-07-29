import { useCallback, useState } from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment");
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    console.log("decrement");
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <h1>UseCallback hook</h1>
      <h2>count: {count}</h2>
      <Button onClick={increment}>Increment</Button> <br />
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
