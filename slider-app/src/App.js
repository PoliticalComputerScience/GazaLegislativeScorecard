import React, { useState } from 'react';
import './sliders.css';

function App() {
  const [sliderValues, setSliderValues] = useState([1, 1, 1, 1, 1]); // 5 sliders default to 1

  const handleSliderChange = (index, value) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  return (
    <div className="App">
      <h1>Interactive Sliders</h1>
      {sliderValues.map((value, index) => (
        <div key={index}>
          <label>Slider {index + 1}: {value}</label>
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
  );
}

export default App;

