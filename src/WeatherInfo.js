import React from "react";
import FormattedDate from "./FormattedDate.js";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  return (
    <div className="all-data">
      <div className="city-data">
        <h1 id="city">{props.data.name}</h1>
        <div className="data-details">
          <p>
            <span id="date">
              {" "}
              <FormattedDate date={props.data.dt * 1000} />
            </span>
            ,
            <span id="cond" className="text-capitalize">
              {" "}
              {props.data.weather[0].description}
            </span>
            <br />
            Humidity:
            <strong>
              <span id="humidity"> {props.data.main.humidity}%</span>
            </strong>
            , Wind:
            <strong>
              <span id="wind"> {Math.round(props.data.wind.speed)} km/hr</span>
            </strong>
          </p>
        </div>
      </div>
      <div className="temperature-block">
        <div className="temp-icon">☀️</div>
        <div className="temp"> {Math.round(props.data.main.temp)} </div>
        <div className="unit">°C</div>
      </div>
    </div>
  );
}
