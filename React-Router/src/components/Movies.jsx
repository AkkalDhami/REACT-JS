import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './ui/Card';

const Movies = () => {
  const moviesData = useLoaderData()
  console.log(moviesData);
  return (
    <ul className="grid p-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
      {moviesData.Search.map((movie) => {
        return <Card key={movie.imdbID} movie={movie} />;
      })}
    </ul>
  );
}

export default Movies