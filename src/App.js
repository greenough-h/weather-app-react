import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="all-data">
        <div className="city-data">
          <h1 id="city">Boston</h1>
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
}
