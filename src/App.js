import React from "react";

import "./App.css";
import Weather from "./components/Weather";
import Info from "./components/Info";

function App() {
  return (
    <div className="app">
      <Weather />
      <Info />
    </div>
  );
}

export default App;
