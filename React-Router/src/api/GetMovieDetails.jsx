import React from "react";

const GetMovieDetails = async ({ params }) => {
  console.log(params);
  try {
    let url = `https://www.omdbapi.com/?i=${params.id}&apikey=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`;
    try {
      let res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export default GetMovieDetails;
