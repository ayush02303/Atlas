import React, { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "./Components/Layouts/CountryCard";
import SearchFilter from "./Components/Layouts/UI/SearchFilter";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryData();
      setCountries(res.data || []);
    };
    fetchData();
  }, []);

  const searchCountry = (country) => {
    if (!search) return true;
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase().trim());
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  // Apply both search and region filters
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry) => (
          <CountryCard
            country={curCountry}
            key={curCountry.cca3 ?? curCountry.name.common}
          />
        ))}
      </ul>
    </section>
  );
};

export default Country;
