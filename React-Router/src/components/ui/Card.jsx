import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <li>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-[300px] h-[300px] object-cover"
      />
      <h2 className="text-lg my-1 font-bold">{movie.Title}</h2>
      <NavLink
        to={`/movies/${movie.imdbID}`}
        className="bg-blue-500 block text-center hover:bg-blue-700 text-white font-bold py-2 w-full px-4 rounded">
        View More
      </NavLink>
    </li>
  );
};

export default Card;
