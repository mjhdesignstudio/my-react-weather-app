import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="search">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-input"
        />
        <input type="submit" className="search-button" />
      </form>
      <hr />
      <div className="weather-app-data">
        <div className="city-and-conditions">
          <h1 className="weather-app-city">Gresham</h1>
          <p className="weather-app-details">
            <span>Saturday</span>,<span> Partly Clear Skies</span>
            <br />
            Humidity: <strong> 90%</strong>, Wind:
            <strong>3mph</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div className="weather-app-icon">☀️</div>
          <span className="weather-app-temperature">53</span>
          <span className="weather-app-temperature-unit">°F</span>
        </div>
      </div>
    </div>
  );
}
