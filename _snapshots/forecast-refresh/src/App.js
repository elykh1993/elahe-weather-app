import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />

        <footer>
          This project was coded by{" "}
          <a href="https://weather.com/" target="_blank">
           ELahe
          </a>{" "}
          and is{" "}
          <a
            href="https://weather.com/"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather.com/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
