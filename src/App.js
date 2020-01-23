import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div id="main">
      <NavBar/>
      <Home />
      <About id="about"/>
      <Projects />
      <Contact />
      {/* <Route path="/" component={Home} exact/>
      <Route path="about" component={About}/>
      <Route path="projects" component={Projects}/>
      <Route path="contact" component={Contact}/> */}
    </div>
  );
}

export default App;
