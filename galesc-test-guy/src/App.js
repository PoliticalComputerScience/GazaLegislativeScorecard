// src/App.js
import React, { useState } from "react";
import "./App.css";
import LegislatorList from "./components/LegislatorList";
import Filter from "./components/Filter";
import HomePageBanner from "./components/HomePageBanner";

const App = () => {
  const [filteredLegislators, setFilteredLegislators] = useState([]);

  return (
    <div className="App">
      <HomePageBanner />      
      <Filter setFilteredLegislators={setFilteredLegislators} />
      <LegislatorList legislators={filteredLegislators} />
    </div>
  );
};

export default App;
