import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './ui/Card';

const Movies = () => {
  const moviesData = useLoaderData()
  console.log(moviesData);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {moviesData.Search.map((movie) => {
        return <Card key={movie.imdbID} movie={movie} />;
      })}
    </ul>
  );
}

export default Movies