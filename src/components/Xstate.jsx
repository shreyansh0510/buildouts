import axios from "axios";
import React, { useEffect, useState } from "react";

const countriesURL = "https://crio-location-selector.onrender.com/countries";

function Xstate() {
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
  });

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const hanldeState = (e) => {
    setState(e.target.value);
  };

  const hanldeCity = (e) => {
    setCity(e.target.value);
  };

  const getCountries = async () => {
    try {
      let response = await axios.get(countriesURL);
      setCountries(response.data);
    } catch (e) {
      console.log("error");
    }
  };

  const getStates = async (country) => {
    try {
      let response = await axios.get(
        `https://crio-location-selector.onrender.com/country=${country}/states`
      );
      setStates(response.data);
    } catch (e) {
      console.log("error");
    }
  };

  const getCities = async (country, state) => {
    try {
      let response = await axios.get(
        `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`
      );
      setCities(response.data);
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    getCountries();
    if (country) {
      getStates(country);
    }
    if (state) {
      console.log("useEffect >> getCities");
      getCities(country, state);
    }
  }, [country, state]);

  return (
    <>
      <div>Select location</div>
      <div>
        <label htmlFor="countries"></label>
        <select id="countries" name="countries" onChange={handleCountry}>
          <option value="">select countries</option>
          {countries.map((country) => {
            return <option value={country}>{country}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor="state"></label>
        <select id="states" name="states" onChange={hanldeState}>
          <option value="">select countries</option>
          {states.map((state) => {
            return <option value={state}>{state}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor="cities"></label>
        <select id="cities" name="cities" onChange={hanldeCity}>
          <option value="">select countries</option>
          {cities.map((city) => {
            return <option value={city}>{city}</option>;
          })}
        </select>
      </div>
      {city ? (
        <span>
          You Selected {country}, {state}, {city}
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default Xstate;
