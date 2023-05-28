import React from "react";
import "./App.css";
import Weather from "./components/weather/Weather.js";
import Info from "./components/info/Info.js";

function App() {
  return (
    <div className="app">
      <div className="app__left_section">
        <Weather />
      </div>

      <div className="app__right_section">
        <Info />
        {/* <RightSection /> */}
      </div>
    </div>
  );
}

export default App;
