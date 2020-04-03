import React from 'react';
import './Projects.css';
import Popcorn from '../resources/popcornsmooth.png';
import Cricket from '../resources/cricketvision.png';

function Projects() {
    return (
    <div id="projects" className="flex-centered">
        <a class="anchor" id="projects-anchor"></a>
        <h1>Projects</h1>
        <div id="desktop-flex-container">
            <div className="project-container flex-centered">
                <figure id="cricket" className="flex-centered">
                    <img src={Cricket} height="auto" width="150px" alt="A cricket bat hitting a ball"></img>
                </figure>
                <h2>Cricket</h2>
                <figcaption>CricketVision is a React.JS booking app created for a cricket coaching company. It allows players, clubs and coaches to book and manage sessions together.</figcaption>
            </div>

            <div className="project-container flex-centered">
                <figure id="popcorn" className="flex-centered">
                    <a href="http://www.popcornmovies.surge.sh" target="_blank" rel="noopener noreferrer"><img src={Popcorn} height="140px" width="140px" alt="A popcorn emoji"></img></a>
                </figure>
                <h2>Popcorn</h2>
                <figcaption>Popcorn is a movie-search web-app developed with React.JS and powered by a database of 100,000+ movies served via a custom-built Node.JS & SQLite API.</figcaption>
            </div>

            <div className="project-container flex-centered">
                <figure id="volunteersafe" className="flex-centered">
                    <a href="http://www.volunteersafe.com" target="_blank" rel="noopener noreferrer">VolunteerSafe</a>
                </figure>
                <figcaption>VolunteerSafe is volunteer management and safeguarding software that will be freely available to volunteer groups during the 2020 coronavirus crisis.</figcaption>
            </div>
        </div>
    </div>   
    )
}

export default Projects;