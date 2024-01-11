import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  const [ready, setReady] = useState(null);
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayTemp(response) {
    setReady(true);
    setMessage(response.data.main.temperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
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
            <input type="submit" className="search-submit" />
          </form>
        </div>
        <div className="all-data">
          <div className="city-data">
            <h1 id="city">{message}</h1>
            <div className="data-details">
              <p>
                <span id="date">Tuesday 20:43</span>,
                <span id="cond">clear sky</span>
                <br />
                Humidity:
                <strong>
                  <span id="humidity"> 20%</span>
                </strong>
                , Wind:
                <strong>
                  <span id="wind"> 8 km/hr</span>
                </strong>
              </p>
            </div>
          </div>
          <div className="temperature-block">
            <div className="temp-icon">☀️</div>
            <div className="temp">20</div>
            <div className="unit">°C</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="Header">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Enter a City..."
            required
            onChange={updateCity}
          />
          <input type="submit" className="search-submit" />
        </form>
      </div>
    );
  }
}
