import React from "react";

export const GetApiData = async () => {
  let url =
    "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";
  try {
    let res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetApiData;
