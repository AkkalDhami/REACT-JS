import React from "react";

const EventHandling = () => {
  const handleButtonClick = (e) => {
    console.log(e);
    alert("Button clicked!");
  };
  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}>
        Click Me
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert("Button clicked 2!")}>
        Click Me 2
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => handleButtonClick(e)}>
        Click Me 3
      </button>
    </div>
  );
};

export default EventHandling;
