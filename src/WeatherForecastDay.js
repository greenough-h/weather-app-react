import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="day">
        <FormattedDate date={props.data.dt * 1000} type="short" />
      </div>
      <div className="icon">
        <WeatherIcon icon={props.data.weather[0].icon} size="medium" />
      </div>
      <span className="high">{Math.round(props.data.temp.max)}°</span>{" "}
      <span className="low">{Math.round(props.data.temp.min)}°</span>
    </div>
  );
}
