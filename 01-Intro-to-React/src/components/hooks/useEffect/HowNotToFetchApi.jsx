import { useEffect, useState } from "react";

const HowNotToFetchApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <h1 className="text-4xl">How Not To Fetch Api</h1>
      <ul className="text-lg text-zinc-300 list-disc">
        <img src={data.sprites.other.dream_world.front_default} alt="" />
        <h1 className="text-2xl">{data.name}</h1>
        <div className="mt-4">
          <p>Weight: {data.weight}</p>
          <p>Height: {data.height}</p>
          <p>Speed: {data.stats[0].base_stat}</p>
          <p>Abilities: {data.abilities[0].ability.name}</p>
        </div>
      </ul>
    </div>
  );
};

export default HowNotToFetchApi;
