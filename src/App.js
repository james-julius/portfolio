import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div id="main">
      <nav>
        <span id="logo"><img src="./resources/"/></span>
        <Link to="/" className="navlink">Home</Link>
        <Link to="/" className="navlink">About</Link>
        <Link to="/" className="navlink">Projects</Link>
        <Link to="/" className="navlink">Contact</Link>
      </nav>

      <Route path="/" component={Home} exact/>
      <Route path="about" component={About}/>
      <Route path="projects" component={Projects}/>
      <Route path="contact" component={Contact}/>
    </div>
  );
}

export default App;
