import { useTabPanel } from "@mui/base";
import axios from "axios";
import React from "react";
import { useState } from "react";

const url =
  "https://api.weatherapi.com/v1/current.json?key=01768725685a4e22a2e81421230912&q=";

function Xweather() {
  const [city, setCity] = useState("");
  const [citydata, setCitydata] = useState([]);
  const [hasCity, setHasCity] = useState(false);

  const [isloading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    if (city) {
      try {
        let response = await axios.get(`${url}${city}`);
        setCitydata(response.data);
        setHasCity(true);
      } catch (e) {
        setIsloading(true);
        setTimeout(() => {
          alert("Failed to fetch weather data");
          setIsloading(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <div>Xweather</div>
      <form action="">
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
          required
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>

      {hasCity ? (
        <div style={{ display: "flex", textAlign: "center" }}>
          <div className="weather-card">
            <div>temperature</div>
            <div>{citydata?.current.temp_c}</div>
          </div>
          <div className="weather-card">
            <div>Humidity</div>
            <div>{citydata?.current.humidity}</div>
          </div>
          <div className="weather-card">
            <div>Condition</div>
            <div>{citydata?.current.condition.text}</div>
          </div>
          <div className="weather-card">
            <div>Wind Speed</div>
            <div>{citydata?.current.gust_kph}</div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isloading ? <p>Loading data…</p> : ""}
    </>
  );
}

export default Xweather;
