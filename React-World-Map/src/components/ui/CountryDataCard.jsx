import React from "react";

const CountryDataCard = ({ data }) => {
  const { countryName, capital, interestingFact, population } = data;

  return (
    <div className="container-card">
      <p className="card-title">Name: {countryName}</p>
      <p>Capital: {capital}</p>
      <p className="card-description">Interesting Fact: {interestingFact}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default CountryDataCard;
