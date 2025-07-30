import React from "react";

const Card = ({ movie }) => {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} className="w-[200px] h-[300px] object-cover"/>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </li>
  );
};

export default Card;
