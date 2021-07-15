import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";

import { BrowserRouter as Router } from "react-router-dom";
import PropertyContext from "./context/PropertyContext";

function App() {
  const propertyContext = useState({
    selectedSubPropertyType: "null",
    selectedLocation: "null",
  });
  return (
    <PropertyContext.Provider value={propertyContext}>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </PropertyContext.Provider>
  );
}

export default App;
