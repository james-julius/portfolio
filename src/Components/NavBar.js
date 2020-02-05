import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../resources/android-chrome-512x512.png';

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
            <Link onMouseOver={() => handleHover(1)} onMouseLeave={() => handleHover(0)} to="/" smooth className="navlink">Home</Link>
            <span style={{display: (NavHover === 1) ? 'block': 'none'}} className="selectbar"></span>
            </div>
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(2)} onMouseLeave={() => handleHover(0)} to="/#about" smooth  className="navlink">About</Link>
            <span style={{display: (NavHover === 2) ? 'block': 'none'}}  className="selectbar"></span>
            </div>
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(3)} onMouseLeave={() => handleHover(0)}  to="/#projects" smooth  className="navlink">Projects</Link>
            <span style={{display: (NavHover === 3) ? 'block': 'none'}} className="selectbar"></span>
            </div>
            <div className="navlink-container">
            <Link onMouseOver={() => handleHover(4)} onMouseLeave={() => handleHover(0)}  to="/#contact" smooth  className="navlink">Contact</Link>
            <span style={{display: (NavHover === 4) ? 'block': 'none'}}  className="selectbar"></span>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;