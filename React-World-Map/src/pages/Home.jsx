import React from "react";
import countryData from "../api/CountryData.json";
import CountryDataCard from "../components/ui/CountryDataCard";
console.log(countryData);
const Home = () => {
  return (
    <section className="gradient-cards country-card">
      {countryData.map((data) => (
        <CountryDataCard data={data} key={data.id} />
      ))}
    </section>
  );
};

export default Home;
