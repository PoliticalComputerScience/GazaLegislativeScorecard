import React, { useState } from 'react';
import './page.css';

function App() {
  const [sliderValues, setSliderValues] = useState([1, 1, 1, 1, 1]); // 5 sliders default to 1
  
  const senators = [
    { name: 'Rep. Keith Self', state: 'TX', score: 100 },
    { name: 'Rep. Mary Miller', state: 'IL', score: 100 },
    // Add other senators or reps as needed
  ];

  const handleSliderChange = (index, value) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  const handleButtonClick = (e) => {
    e.target.classList.add('flash');
    setTimeout(() => {
      e.target.classList.remove('flash');
    }, 300); // Duration of the flash animation
  };
  return (
    <div className="App">
      <div className="title-card">
        <div className="titles-section">
          <h1>Gaza Legislative Scorecard</h1>
          <h2 className="subtitle">A project made by the Political Computer Scientists of Berkeley</h2>
        </div>
        <div className="button-container">
          <button onClick={handleButtonClick}>
            Team Info
          </button>
          <button onClick={handleButtonClick}>
            Research Writeup
          </button>
        </div>
      </div>

      <div className="sliders-container">
        {sliderValues.map((value, index) => (
          <div key={index} className="slider-section">
            <label>Question {index + 1}: {value}</label>
            <input
              type="range"
              min="1"
              max="7"
              value={value}
              onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
            />
          </div>
        ))}
        <button onClick={() => console.log('Current Slider Values:', sliderValues)}>
          Submit
        </button>
      </div>

      <div className="senator-section">
        {senators.map((senator, index) => (
          <div key={index} className="senator-card">
            <h3>{senator.name}</h3>
            <p>State: {senator.state}</p>
            <p>Score: <span>{senator.score}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;