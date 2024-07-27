import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="navbar-brand">SAM AI</div>
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/"> Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>

          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 SAM AI. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;
