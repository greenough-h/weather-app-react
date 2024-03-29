import React, { useState } from "react";
import Footer from "./components/Footer";
import WeatherInfo from "./components/WeatherInfo.js";
import WeatherForecast from "./components/WeatherForecast";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App(props) {
  const [ready, setReady] = useState(null);
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({});

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayTemp(response) {
    setReady(true);
    setWeatherData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "f5029b784306910c19746e40c14d6cd3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="Header">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-input"
              placeholder="Enter a City..."
              required
              onChange={updateCity}
            />
            <input type="submit" className="search-submit" value="Search" />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
        <Footer />
      </div>
    );
  } else {
    const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);

    return (
      <div className="Header App">
        <h3> Loading... </h3>
      </div>
    );
  }
}
