// src/App.js
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      const apiKey = "420e5cc9baa405a371d0f4ae0f7792a2";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        <h1>Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
      <Footer />
    </>
  );
};

export default App;
