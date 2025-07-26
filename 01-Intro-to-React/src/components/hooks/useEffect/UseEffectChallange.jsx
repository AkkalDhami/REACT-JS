import { useEffect, useState } from "react";

const UseEffectChallange = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h1 className="text-4xl">UseEffectChallange</h1>
      <div className="mt-4">
        <p>count: {count} </p>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          increment
        </button>
      </div>
      <div className="mt-4">
        <p>name: {name} </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="p-2 border outline-0 mt-2"
        />
      </div>
    </div>
  );
};

export default UseEffectChallange;
