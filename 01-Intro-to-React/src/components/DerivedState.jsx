import { useState } from "react";

//? Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

const usersInfo = [
  { name: "Aarav", age: 21 },
  { name: "Akkal", age: 22 },
  { name: "Rajan", age: 20 },
];
const DerivedState = () => {
  const [users, setUsers] = useState([...usersInfo]);
  console.log(users);
  const userCount = users.length; //* userCount is derived state
  const avgAge = users.reduce((acc, user) => acc + user.age, 0) / userCount;
  return (
    <div>
      <h2 className="text-3xl">Users List</h2>
      <ul className="text-lg text-zinc-300">
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p className="text-xl">Total Users: {userCount}</p>
      <p className="text-xl">Average Age: {avgAge}</p>
    </div>
  );
};

export default DerivedState;
