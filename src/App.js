import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {

  const drop = keyframes`
  0% {
      transform: translateY(0vh);
    }
    75% {
      transform: translateY(90vh);
    }
    100% {
      transform: translateY(90vh);
    }
  `;
  const stem = keyframes`
  0% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `;

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
