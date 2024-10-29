// src/Components/Home.js

import React from 'react';

const Home = () => {
  console.log('Home component is rendering'); // Log message for debugging
  return (
    <div className="home-container">
      <h2>Welcome to the Gaza Legislative Scorecard!</h2>
      <p>
        This project aims to assess how our representatives in Congress are voting
        on key issues related to the current situation in Gaza, including:
      </p>
      <ul>
        <li>Humanitarian aid</li>
        <li>Ceasefire agreements</li>
        <li>Legislation affecting peace and security</li>
      </ul>
      <p>
        We believe in transparency and accountability in governance. This scorecard
        will help you understand how your elected officials are addressing these
        critical issues.
      </p>
    </div>
  );
};

export default Home;
