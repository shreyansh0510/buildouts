import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export default function Xcountriessearch() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [keyword, setKeyword] = useState("");

  const getCountries = async () => {
    try {
      let response = await axios.get(url);
      let data = response.data;
      setCountries(data);
      setFilteredCountries(data);
    } catch (e) {
      console.log("error");
    }
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
    countrySearch(e.target.value);
  };

  const countrySearch = (searchName) => {
    console.log("countrySearch", searchName);
    let filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchName.toLowerCase())
    );
    console.log("filteredCountries", filteredCountries);
    setFilteredCountries(filteredCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}>
          <div>Search Countries</div>
          <input
            type="text"
            name="keyword"
            value={keyword}
            onChange={handleChange}
          />
        </div>
        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "25fr 25fr 25fr 25fr",
          }}
        >
          {filteredCountries?.map((country) => {
            return (
              <>
                <div
                  style={{
                    border: "1px solid lightgray",
                    height: 150,
                    width: 150,
                    objectFit: "cover",
                    textAlign: "center",
                  }}
                  className="countryCard"
                >
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    style={{
                      height: 100,
                      width: 100,
                    }}
                  />
                  <h3>{country.name.common}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
