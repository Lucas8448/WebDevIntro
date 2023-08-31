import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Intro from './chapters/Intro';
import Environment from './chapters/Environment';
import HTML from './chapters/HTML';
import CSS from './chapters/CSS';
import Forms from './chapters/Forms';
import AdvancedCSS from './chapters/AdvancedCSS';
import JavaScript from './chapters/JavaScript';
import Functions from './chapters/Functions';
import DOM from './chapters/DOM';
import Website from './chapters/Website';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/intro">Intro</Link>
          <Link to="/environment">Environment</Link>
          <Link to="/html">HTML</Link>
          <Link to="/css">CSS</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/advancedcss">Advanced CSS</Link>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/functions">Functions</Link>
          <Link to="/dom">DOM</Link>
          <Link to="/website">Website</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/advancedcss" element={<AdvancedCSS />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/dom" element={<DOM />} />
          <Route path="/website" element={<Website />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;