import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function displayDailyForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="day">
              <FormattedDate date={forecastData[0].dt * 1000} type="short" />
            </div>
            <div className="icon">
              <WeatherIcon icon="04d" size="medium" />
            </div>
            <span className="high">
              {Math.round(forecastData[0].temp.max)}°
            </span>{" "}
            <span className="low">{Math.round(forecastData[0].temp.min)}°</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let latitude = props.data.coord.lat;
    let longitude = props.data.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayDailyForecast);
  }
}
