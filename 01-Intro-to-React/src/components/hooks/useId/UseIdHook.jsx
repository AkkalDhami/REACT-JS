import { useId } from "react";

const UseIdHook = () => {
  const nameId = useId();
  const passwordId = useId();
  return (
    <div>
      <h1 className="text-4xl mb-5">useId Hook</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={nameId}>Name:</label> <br />
        <input
          type="text"
          name="name"
          id={nameId}
          placeholder="Enter name"
          className="p-2 border"
        />
        <br /> <br />
        <label htmlFor={passwordId}>Password:</label> <br />
        <input
          type="password"
          name="password"
          id={passwordId}
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
