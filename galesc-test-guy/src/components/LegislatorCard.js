// src/components/LegislatorCard.js
import React from "react";

const LegislatorCard = ({ legislator }) => {
  const { name, party, votes, score } = legislator;

  return (
    <div className="legislator-card">
      <h2>{name}</h2>
      <p>Party: {party}</p>
      <div className="votes">
        <h3>Votes:</h3>
        <ul>
          {Object.entries(votes).map(([bill, vote]) => (
            <li key={bill}>
              {bill}: <strong>{vote}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="score">
      <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default LegislatorCard;
