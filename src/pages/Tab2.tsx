import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorNotification from "../components/ErrorNotification";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [inputCity, setInputCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const apiKey = "9a8ea294bed6bb6a10e7a91941c3a347";

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("City not found or network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity) {
      fetchWeather(inputCity);
      setInputCity("");
    }
  };

  return (
    <div className="tab2-container">
      <h1>Search Weather by City</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorNotification message={error} />
      ) : (
        weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Tab2;
