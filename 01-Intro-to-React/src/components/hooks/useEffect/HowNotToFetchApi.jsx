import { useState } from "react";

const HowNotToFetchApi = () => {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=55")
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));
  return (
    <div>
      <h1 className="text-4xl">How Not To Fetch Api</h1>
      <ul className="text-lg text-zinc-300 list-disc">
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HowNotToFetchApi;
