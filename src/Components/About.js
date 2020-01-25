import React from 'react';
import styled, {keyframes} from "styled-components";
import './About.css';
import Website from '../resources/Skills/website.png';
import WebApp from '../resources/Skills/webapp.png';
import WebScrape from '../resources/Skills/webscraping.png';
import Cloud from '../resources/Skills/cloud.png';
import API from '../resources/Skills/api.png';
import ReactJPG from '../resources/Technologies/reactjs.png';


function About() {

    const flux = keyframes`
        0% {background-position:0% 50%}
        50% {background-position:100% 50%}
        100% {background-position:0% 50%}
    `;

    const pulse = keyframes`
        0% {height:17px, width: 17px}
        50% {height:20px; width: 20px}
        100% {height:17px, width: 17px}
    `;

    const Span = styled.span`
        height: 17px;
        width: 17px;
        background: linear-gradient(90deg, #7763f8, #d15959);
        background-size: 400% 400%;
        animation: ${flux} 2s ease-in-out infinite, ${pulse} 2s ease-in-out infinite;
    `;

    return (
    <>
    <div id="about">
        <h1>About me</h1>
        <div id="desktop-skills-left">
            <h2>Skills & Capabilities</h2>
            
            <div id="skills-container" className="flex-centered">
                <span className="flex-centered">
                    <img src={Website}/>
                    <figcaption>Website Development</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={WebApp} />
                    <figcaption>Web App Development</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={WebScrape}/>
                    <figcaption>Web Scraping</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={Cloud} />
                    <figcaption>Cloud Deployment</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={API} />
                    <figcaption>API Creation</figcaption>
                </span>
            </div>
        </div>
    <span className="separation-bar" id="tech-separator"></span>
    <div id="desktop-skills-right">
        <h2 id="tech-header">Technologies & Frameworks</h2>
        <div id="tech-container" className="flex-centered">
            <div id="techswitcher" className="flex-centered">
                <Span id="leftTriangle"></Span>
                    <span id="imgAndCaption" className="flex-centered">
                        <img src={ReactJPG} height="80px" width="80px"/>
                    </span>
                <Span id="rightTriangle"></Span>
            </div>
            <h3>React.JS</h3>
            <div id="tech-description" className="flex-centered">
                <p>React.JS is a modern web development framework that allows you to build blazingly fast web-apps.</p>
            </div>
        </div>
    </div>
    <span id="tech-bottom-separator" className="separation-bar"></span>
    </div>
    </>
    )
}

export default About;