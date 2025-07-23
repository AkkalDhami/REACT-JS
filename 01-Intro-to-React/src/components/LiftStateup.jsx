import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";

const LiftStateup = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <FiUsers />
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

function InputComponent({ inputValue, setInputValue }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="p-2 border"></input>
    </div>
  );
}

function DisplayComponent({ inputValue }) {
  return (
    <div>
      <h1>Current Value:{inputValue}</h1>
    </div>
  );
}

export default LiftStateup;
