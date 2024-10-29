import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './Components/Home'; 
import About from './Components/About'; 
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Gaza Legislative Scorecard</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
