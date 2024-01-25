import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Built by{" "}
        <a
          href="https://github.com/greenough-h"
          target="_blank"
          rel="noreferrer"
        >
          Hayley Greenough
        </a>
        , sourced on{" "}
        <a
          href="https://github.com/greenough-h/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        , and hosted on{" "}
        <a href="https://weather-app-react-88.netlify.app/">Netlify</a>
      </p>
    </div>
  );
}
