// src/components/WeatherCard.js
import React from "react";
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";
import moment from "moment";

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const condition = weather[0].main;

  const renderIcon = () => {
    switch (condition) {
      case "Clear":
        return <WiDaySunny size={50} />;
      case "Rain":
        return <WiRain size={50} />;
      case "Clouds":
        return <WiCloudy size={50} />;
      default:
        return <WiCloudy size={50} />;
    }
  };

  return (
    <div
      className="weather-card"
      style={{
        backgroundColor:
          condition === "Clear"
            ? "#4a90e2"
            : condition === "Rain"
            ? "#5c5c5c"
            : "#c2c2c2",
      }}
    >
      <h2>{name}</h2>
      <div className="icon">{renderIcon()}</div>
      <p>{temperature}°C</p>
      <p>{condition}</p>
      <p>{moment().format("dddd, h:mm A")}</p>
    </div>
  );
};

export default WeatherCard;
