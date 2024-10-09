import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorNotification from "../components/ErrorNotification";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [weather, setWeather] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const defaultCity = "Manado"; // Lokasi default

  const apiKey = "9a8ea294bed6bb6a10e7a91941c3a347";

  useEffect(() => {
    fetchWeather(defaultCity);
  }, []);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tab1-container">
      <h1>Weather in {defaultCity}</h1>
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

export default Tab1;
