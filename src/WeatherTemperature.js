import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  return (
    <span className="temperature-block">
      <div className="temp"> {props.celsius}</div>
      <div className="unit">
        <a href="#" className="text-decoration-none">
          °C{" "}
        </a>
        |{" "}
        <a href="#" className="text-decoration-none">
          °F
        </a>{" "}
      </div>
    </span>
  );
}
