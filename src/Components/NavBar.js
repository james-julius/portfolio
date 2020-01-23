import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../resources/favicon/android-chrome-512x512.png';

function NavBar() {
    const [NavHover, setNavHover] = useState(0);

    function handleHover(input) {
        setNavHover(input);
    }

    return (
        <nav>
        <img src={Logo} height="40px" width="40px" alt=""/>
        <div id="navlinks-container">
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(1)} onMouseLeave={() => handleHover(0)} to="/" className="navlink">Home</Link>
            <span style={{display: (NavHover === 1) ? 'block': 'none'}} className="selectbar"></span>
            </div>
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(2)} onMouseLeave={() => handleHover(0)} to="/about" className="navlink">About</Link>
            <span style={{display: (NavHover === 2) ? 'block': 'none'}}  className="selectbar"></span>
            </div>
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(3)} onMouseLeave={() => handleHover(0)}  to="/projects" className="navlink">Projects</Link>
            <span style={{display: (NavHover === 3) ? 'block': 'none'}} className="selectbar"></span>
            </div>
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(4)} onMouseLeave={() => handleHover(0)}  to="/contact" className="navlink">Contact</Link>
            <span style={{display: (NavHover === 4) ? 'block': 'none'}}  className="selectbar"></span>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;