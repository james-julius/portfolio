import React from 'react';
import './Home.css';

function Home() {
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    return (
        <div id="home">
            <div id="content-background">
                        <h1>James Darby</h1>
                        <h1>Web Developer</h1>
            </div>
            <div id="islands">
                <div id="bay">
                    { (isChrome) ? <svg>
                        <filter id="bay-waves" x="0" y="0" width="100%" height="100%">
                            <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
                            <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
                            <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" 
                            keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
                          </filter>
                    </svg>: null}
                    <div id="waterfall">
                          { (isChrome)? <svg>
                            <filter id="waterfall" x="0" y="0" width="100%" height="100%">
                                <feTurbulence id="waves-filter" numOctaves="6" seed="2" baseFrequency="0.05 0.90"></feTurbulence>
                                <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
                                <animate xlinkHref="#waves-filter" attributeName="baseFrequency" dur="60s"
                                keyTimes="0;0.5;1" values="0.02 0.2; 0.6 0.08; 0.02 0.06" repeatCount="indefinite"/>
                            </filter>
                          </svg> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;