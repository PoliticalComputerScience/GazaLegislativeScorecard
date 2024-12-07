import React, { useState, useEffect } from 'react';
import './page.css';

function App() {
  const [sliderValues, setSliderValues] = useState([1, 1, 1, 1, 1]);
  const [senators, setSenators] = useState([]);

  useEffect(() => {
    const fetchScoresFromFile = async () => {
      try {
        const response = await fetch('slider-app/public/scores.json');
        const data = await response.json();
        console.log(data);
        setSenators(data);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };
  
    fetchScoresFromFile();
  }, []);
  const handleSliderChange = (index, value) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  const handleSubmit = () => {
    const updatedSenators = senators.map((senator) => {
      const newScore = senator.weights.reduce(
        (total, weight, i) => total + weight * sliderValues[i],
        0
      );
      return { ...senator, score: newScore };
    });

    updatedSenators.sort((a, b) => b.score - a.score); // Sort by score in descending order
    setSenators(updatedSenators);
  };

  const handleButtonClick = (e) => {
    e.target.classList.add('flash');
    setTimeout(() => {
      e.target.classList.remove('flash');
    }, 300);
  };

  return (
    <div className="App">
      {/* Title Section */}
      <div className="title-card">
        <div className="titles-section">
          <h1>Gaza Legislative Scorecard</h1>
          <h2 className="subtitle">A project made by the Political Computer Scientists of Berkeley</h2>
        </div>
        <div className="button-container">
          <button onClick={handleButtonClick}>Team Info</button>
          <button onClick={handleButtonClick}>Research Writeup</button>
        </div>
      </div>

      {/* Slider Section */}
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
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Senator Section */}
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