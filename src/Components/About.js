import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
import './About.css';
import Website from '../resources/Skills/website.png';
import WebApp from '../resources/Skills/webapp.png';
import WebScrape from '../resources/Skills/webscraping.png';
import Cloud from '../resources/Skills/cloud.png';
import API from '../resources/Skills/api.png';
import reactPNG from '../resources/Technologies/reactjs.png';
import awsPNG from '../resources/Technologies/AWS.png';
import nodePNG from '../resources/Technologies/nodejs.png';
import mySqlPNG from '../resources/Technologies/MySQL.png';
import netlifyPNG from '../resources/Technologies/Netlify.png';
import cssPNG from '../resources/Technologies/CSS.png';
import htmlPNG from '../resources/Technologies/html5.png';


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
        animation: ${flux} 4s ease-in-out infinite, ${pulse} 2s ease-in-out infinite;
    `;

    const [techIndex, setTechIndex] = useState(0);
    const technologies = {
        0: {name: 'React.JS', img: {src: reactPNG, h: 80, w:80}, description: "React.JS is a modern JavaScript web development framework that allows you to build blazingly fast, scalable web-apps."},
        1: {name: 'Node.JS', img: {src: nodePNG, h: 80, w: 80},  description: "Node.JS is a runtime environment for JavaScript. It allows you to create back-end servers and APIs using frameworks such as Express.JS"},
        2: {name: 'HTML 5', img: {src: htmlPNG, h: 80,w: 80},  description: "HTML (Hyper Text Markup Language) is the basic language of the web. Today, it’s important to use semantic HTML to make the web accessible."},
        3: {name: 'CSS 3', img: {src: cssPNG, h: 80, w: 58}, description: "CSS3 is the design language of the web - it allows you to add colour, spacing and style to websites. Otherwise, HTML is just plain old text and images!"},
        4: {name: 'MySQL', img: {src: mySqlPNG, h: 100, w: 80},  description: "MySQL is the world’s most popular open-source. It allows you to store your data in an accessible, secure and structured way."},
        5: {name: 'AWS', img: {src: awsPNG, h: 40, w: 80},  description: "AWS is the world’s popular cloud hosting provider. I use it to host secure and scalable website back-ends for clients, including APIs and databases."},
        6: {name: 'Netlify', img: {src: netlifyPNG, h: 80, w: 80},  description: "Netlify is a continuous web deployment service. I use it to live-update websites from code on my machine, to your website in under a minute."},
    };

    // setInterval(() => (techIndex === 6) ? setTechIndex(0) : setTechIndex(techIndex+1), 4000);

    return (
    <div id="about">
    <a class="anchor" id="about-anchor"></a>
        <h1>About me</h1>
        <div id="desktop-skills-left">
            <h2>Skills & Capabilities</h2>
            
            <div id="skills-container" className="flex-centered">
                <span className="flex-centered">
                    <img src={Website} alt="A globe icon"/>
                    <figcaption>Website Development</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={WebApp} alt="A stacked laptop, tablet and phone."/>
                    <figcaption>Web App Development</figcaption>
                </span>
                <span className="flex-centered" id="webscrape-container">
                    <img src={WebScrape} alt="A cube and magnifying glass"/>
                    <figcaption>Web Scraping</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={Cloud} alt="A floating cloud"/>
                    <figcaption>Cloud Deployment</figcaption>
                </span>
                <span className="flex-centered">
                    <img src={API} alt="A cog icon"/>
                    <figcaption>API Creation</figcaption>
                </span>
            </div>
        </div>
    <span className="separation-bar" id="tech-separator"></span>
    <div id="desktop-skills-right">
        <h2 id="tech-header">Technologies & Frameworks</h2>
        <div id="tech-container" className="flex-centered">
            <div id="techswitcher" className="flex-centered">
                <Span id="leftTriangle" onClick={() => (techIndex > 0) ? setTechIndex(techIndex - 1): setTechIndex(6)}></Span>
                    <span id="imgAndCaption" className="flex-centered">
                        <img src={technologies[techIndex].img.src} height={technologies[techIndex].img.h} width={technologies[techIndex].img.w}/>
                    </span>
                <Span id="rightTriangle" onClick={() => (techIndex < 6) ? setTechIndex(techIndex + 1): setTechIndex(0)}></Span>
            </div>
            <h3>{technologies[techIndex].name}</h3>
            <div id="tech-description" className="flex-centered">
                <p>{technologies[techIndex].description}</p>
            </div>
        </div>
    </div>
    <span id="tech-bottom-separator" className="separation-bar"></span>
    </div>
    )
}

export default About;