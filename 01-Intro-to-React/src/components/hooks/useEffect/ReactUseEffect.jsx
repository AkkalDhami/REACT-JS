import { useEffect, useState } from "react";

const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="text-4xl">React UseEffect</h1>
      <h2 className="text-2xl mt-1.5">Date: {date}</h2>
      <div className="mt-4">
        <p>count: {count} </p>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          increment
        </button>
      </div>
    </div>
  );
};

export default ReactUseEffect;
