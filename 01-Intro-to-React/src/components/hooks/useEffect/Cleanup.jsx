import React, { useEffect, useState } from "react";

const Cleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h1 className="text-4xl">Cleanup</h1>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default Cleanup;
