import React from "react";
import { useLoaderData } from "react-router-dom";

const MoviesDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Movie Details</h1>
      <img
        src={movieData.Poster}
        alt={movieData.Title}
        className="w-[300px] h-[300px] object-cover"
      />
      <p>Title: {movieData.Title}</p>
      <p>Year: {movieData.Year}</p>
      <p>Released: {movieData.Released}</p>
      <p>Genre: {movieData.Genre}</p>
      <p>Plot: {movieData.Plot}</p>
      <p>Actors: {movieData.Actors}</p>
      <p>Imdb Rating:{movieData.imdbRating}</p>
      <p>Writer:{movieData.Writer}</p>
      <p>Director:{movieData.Director}</p>
      <p>Runtime:{movieData.Runtime}</p>
    </div>
  );
};

export default MoviesDetails;
