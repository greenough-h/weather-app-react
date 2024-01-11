import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Enter a City..."
          required
        />
        <input type="submit" className="search-submit" />
      </form>
    </div>
  );
}
