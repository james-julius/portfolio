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
                <fig id="popcorn" className="flex-centered">
                    <img src={Popcorn} height="140px" width="140px" alt="A popcorn emoji"></img>
                </fig>
                <h2>Popcorn</h2>
                <figcaption>Popcorn is a movie-search web-app developed with React.JS and powered by a database of 100,000+ movies served via a custom Node.JS & SQLite API.</figcaption>
            </div>

            <div className="project-container flex-centered">
                <fig id="cricket" className="flex-centered">
                    <img src={Cricket} height="auto" width="150px"></img>
                </fig>
                <h2>Cricket</h2>
                <figcaption>Cricket is a React.JS booking app created for a Cricket coaching company. It allows players and coaches to log in and book sessions together.</figcaption>
            </div>
        
            {/* <div className="project-container">
                <fig ></fig>
                <figcaption></figcaption>
            </div> */}
        </div>
    </div>   
    )
}

export default Projects;