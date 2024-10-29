import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // This is used
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Make sure this is here */}
  </React.StrictMode>
);

reportWebVitals();
