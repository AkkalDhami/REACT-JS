import { useEffect, useState } from "react";

const HowNotToFetchApi = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  if (!data) {
    return <h1>Loading...</h1>;
  }
  
  console.log(data);
  console.log(data.sprites.other.dream_world.front_default);
  return (
    <div>
      <h1 className="text-4xl">How Not To Fetch Api</h1>
      <ul className="text-lg text-zinc-300 list-disc">
        <img src={data.sprites.other.dream_world.front_default} alt="" />
        <h1>{data.name}</h1>
      </ul>
    </div>
  );
};

export default HowNotToFetchApi;
