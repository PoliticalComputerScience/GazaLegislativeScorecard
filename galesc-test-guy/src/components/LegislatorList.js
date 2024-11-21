// src/components/LegislatorList.js
import React from "react";
import LegislatorCard from "./LegislatorCard";
import legislators from "../data/legislators";

const LegislatorList = () => {
  return (
    <div className="legislator-list">
      {legislators.map((legislator) => (
        <LegislatorCard key={legislator.id} legislator={legislator} />
      ))}
    </div>
  );
};

export default LegislatorList;
