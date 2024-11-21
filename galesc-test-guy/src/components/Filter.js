// src/components/Filter.js
import React, { useState } from "react";
import legislators from "../data/legislators";

const Filter = ({ setFilteredLegislators }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    const filtered = legislators.filter((legislator) =>
      legislator.votes.bill1 === event.target.value
    );
    setFilteredLegislators(filtered);
  };

  return (
    <div className="filter">
      <label>Filter by vote on Bill 1:</label>
      <select value={filter} onChange={handleChange}>
        <option value="">All</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default Filter;
