import React from 'react';
import './Projects.css';
import Popcorn from '../resources/popcornsmooth.png';
import Cricket from '../resources/cricket.png';

function Projects() {
    return (
    <div id="projects" className="flex-centered">
        <h1>Projects</h1>
        <div id="desktop-flex-container">
            <div className="project-container flex-centered">
                <figure id="popcorn" className="flex-centered">
                    <a href="http://popcornmovies.surge.sh" target="_blank" rel="noopener noreferrer"><img src={Popcorn} height="140px" width="140px" alt="A popcorn emoji"></img></a>
                </figure>
                <h2>Popcorn</h2>
                <figcaption>Popcorn is a movie-search web-app developed with React.JS and powered by a database of 100,000+ movies served via a custom Node.JS & SQLite API.</figcaption>
            </div>

            <div className="project-container flex-centered">
                <figure id="cricket" className="flex-centered">
                    <img src={Cricket} height="auto" width="150px" alt="A cricket bat hitting a ball"></img>
                </figure>
                <h2>Cricket</h2>
                <figcaption>Cricket is a React.JS booking app created for a Cricket coaching company. It allows players and coaches to log in and book sessions together.</figcaption>
            </div>
        
            {/* <div className="project-container">
                <figure></figure>
                <figcaption></figcaption>
            </div> */}
        </div>
    </div>   
    )
}

export default Projects;