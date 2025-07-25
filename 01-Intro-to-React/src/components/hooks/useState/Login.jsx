import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto w-full mt-5 border border-zinc-500/30 p-5 rounded-lg">
      <h1 className="text-4xl">Login Form</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          className="px-4 py-3 border border-zinc-500/30 outline-none focus:border-green-500 w-full mt-3 rounded-full"
          type="text"
          name="email"
          placeholder="Email"
          id="email"
          value={user.email} onChange={handleInputChange}
        />
        <input
          className="px-4 py-3 border border-zinc-500/30 outline-none focus:border-green-500 w-full mt-3 rounded-full"
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          value={user.password} onChange={handleInputChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 cursor-pointer rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
