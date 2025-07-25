import { useState } from "react";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  return (
    <div>
      <h1 className="text-4xl">ShortCircuit</h1>
      {isLoggedIn && <p className="text-3xl mt-4">Your are logged in</p>}

      {user ? `Hello ${user}` : "Please login"}
      <div className="grid grid-cols-3 gap-3 mt-5">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="cursor-pointer bg-blue-500 px-3 py-2 rounded-lg">
          Toggle Login State
        </button>
        <button
          onClick={() => setUser("Akkal Dhami")}
          className="cursor-pointer bg-blue-500 px-3 py-2 rounded-lg">
          Set user
        </button>
        <button onClick={() => setUser("")} className="cursor-pointer bg-blue-500 px-3 py-2 rounded-lg">
          Clear user
        </button>
      </div>
    </div>
  );
};

export default ShortCircuit;
