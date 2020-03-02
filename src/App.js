import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import sharingImg from './resources/sharingHome.png';

function App() {
  return (
    <div id="main">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <img src={sharingImg} style={{display: 'none'}}/>
    </div>
  );
}

export default App;
