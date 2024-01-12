import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="temperature-block">
        <div className="temp"> {props.celsius}</div>
        <div className="unit">
          °C |{" "}
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </div>
      </span>
    );
  } else {
    return (
      <span className="temperature-block">
        <div className="temp"> {Math.round((props.celsius * 9) / 5 + 32)}</div>
        <div className="unit">
          {" "}
          <a href="/" className="text-decoration-none" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </div>
      </span>
    );
  }
}
