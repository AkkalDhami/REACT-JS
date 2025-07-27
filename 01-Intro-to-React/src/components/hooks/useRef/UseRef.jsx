import React, { useRef } from "react";

const UseRef = () => {
  const name = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, password.current.value);
  };
  return (
    <div>
      <h1 className="text-4xl">UseRef Hook</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          ref={name}
          placeholder="Enter name"
          className="p-2 border"
        />
        <br /> <br />
        <input
          type="password"
          name="password"
          ref={password}
          placeholder="Enter password"
          className="p-2 border"
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
