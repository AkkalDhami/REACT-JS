import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchPokemonData = async () => {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();

      const pokemonData = data.results.map(async (pokemon) => {
        let res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });

      const allPokemonData = await Promise.all(pokemonData);
      setData(allPokemonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  console.log(data);
  const filteredData = data.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="text-zinc-50">
      <div className="flex items-center flex-col">
        <h1 className="text-4xl mb-8 text-center">Let's Fetch Pokemons</h1>
        <input
          type="search"
          name="search"
          value={search}
          placeholder="Search Pokemon"
          onChange={(e) => setSearch(e.target.value)}
          className="my-6 border border-zinc-500/40 py-3 min-w-[300px] px-5 rounded-lg bg-zinc-800 text-zinc-200 placeholder:text-zinc-500 outline-0 focus:border-green-500 focus:bg-transparent"
        />
      </div>
      <div className="flex mt-5 items-center flex-wrap justify-center gap-6">
        {filteredData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
