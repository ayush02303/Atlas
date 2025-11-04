import React, { useEffect, useState, useTransition } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryIndData } from '../../../api/postApi';

const CountryDetails = () => {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryIndData(id);
        if (res.status === 200 && res.data.length > 0) {
          startTransition(() => {
            setCountry(res.data[0]);
          });
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (isPending || !country) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags?.svg}
            alt={country.flags?.alt || "Country flag"}
            className="flag"
          />

          <div className="country-content">
            <h1 className="card-title">{country.name?.official}</h1>

            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names: </span>
                {country.name?.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="card-description">Population: </span>
                {country.population?.toLocaleString() || "N/A"}
              </p>

              <p>
                <span className="card-description">Region: </span>
                {country.region || "N/A"}
              </p>

              <p>
                <span className="card-description">Sub Region: </span>
                {country.subregion || "N/A"}
              </p>

              <p>
                <span className="card-description">Capital: </span>
                {country.capital?.[0] || "N/A"}
              </p>

              <p>
                <span className="card-description">Top Level Domain: </span>
                {country.tld?.[0] || "N/A"}
              </p>

              <p>
                <span className="card-description">Currencies: </span>
                {country.currencies
                  ? Object.keys(country.currencies)
                      .map((key) => country.currencies[key].name)
                      .join(", ")
                  : "N/A"}
              </p>

              <p>
                <span className="card-description">Languages: </span>
                {country.languages
                  ? Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
