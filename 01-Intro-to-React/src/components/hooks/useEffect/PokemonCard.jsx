import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-2xl p-4 w-72 hover:scale-105 transform transition duration-300">
      <div className="flex justify-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold text-center mt-4 capitalize text-zinc-800 dark:text-white">
        {pokemon.name}
      </h2>

      {/* Types */}
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((typeObj) => (
          <span
            key={typeObj.slot}
            className="px-2 py-1 text-sm rounded-full text-white"
            style={{
              backgroundColor: getTypeColor(typeObj.type.name),
            }}>
            {typeObj.type.name}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
        {pokemon.stats.slice(0, 3).map((stat) => (
          <div key={stat.stat.name} className="flex justify-between">
            <span className="capitalize">{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Utility function to get color based on type
function getTypeColor(type) {
  const colors = {
    fire: "#f97316",
    water: "#3b82f6",
    grass: "#22c55e",
    electric: "#facc15",
    psychic: "#ec4899",
    ice: "#38bdf8",
    dragon: "#8b5cf6",
    dark: "#6b7280",
    fairy: "#f472b6",
    normal: "#a3a3a3",
    fighting: "#ef4444",
    ground: "#eab308",
    rock: "#78716c",
    bug: "#84cc16",
    ghost: "#a78bfa",
    steel: "#94a3b8",
    poison: "#9333ea",
    flying: "#60a5fa",
  };

  return colors[type] || "#64748b"; // fallback color
}

export default PokemonCard;
