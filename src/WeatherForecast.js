import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">Sat</div>
          <div className="icon">
            <WeatherIcon icon="04d" size="medium" />
          </div>
          <span className="high">20°</span> <span className="low">10°</span>
        </div>
      </div>
    </div>
  );
}
