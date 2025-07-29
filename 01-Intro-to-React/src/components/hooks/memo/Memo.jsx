import React, { useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Memo</h1>
      <h2>{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        increment
      </button>

      <p>count is {count}</p>
    </div>
  );
};

export default React.memo(Memo); // Memo;
