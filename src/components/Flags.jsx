import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export default function Flags() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get(url);
      let data = response.data;
      setCountries(data);
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "25fr 25fr 25fr 25fr" }}
      >
        {countries?.map((country) => {
          return (
            <>
              <div
                style={{
                  border: "1px solid lightgray",
                  height: 200,
                  width: "100%",
                  objectFit: "cover",
                  textAlign: "center",
                }}
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
    </>
  );
}
