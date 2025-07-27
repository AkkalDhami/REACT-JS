import { useId } from "react";

const UseIdHook = () => {
  const id = useId();
  return (
    <div>
      <h1 className="text-4xl mb-5">useId Hook</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={id + "name"}>Name:</label> <br />
        <input
          type="text"
          name="name"
          id={id + "name"}
          placeholder="Enter name"
          className="p-2 border"
        />
        <br /> <br />
        <label htmlFor={id + "password"}>Password:</label> <br />
        <input
          type="password"
          name="password"
          id={id + "password"}
          placeholder="Enter password"
          className="p-2 border"
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseIdHook;
