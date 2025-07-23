import React from "react";

const EventPropagation = () => {
  const handleClick = (e) => {
    alert("button clicked");
    e.stopPropagation();
  };
  const handleParentClick = (e) => {
    e.stopPropagation();
    alert("div1 clicked");
  };
  const handleParentClick2 = (e) => {
    e.stopPropagation();
    alert("div2 clicked");
  };
  const handleParentClick3 = () => {
    alert("section clicked");
  };
  return (
    <section
      onClickCapture={handleParentClick3}
      className="flex  gap-3 bg-green-500 text-white font-bold  p-12 rounded">
      <div
        onClickCapture={handleParentClick2}
        className="flex gap-3 bg-indigo-500  text-white font-bold p-12  rounded">
        <div
          onClickCapture={handleParentClick}
          className="flex gap-3 bg-yellow-500  text-white font-bold p-12  rounded">
          <button
            onClickCapture={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            button
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventPropagation;
