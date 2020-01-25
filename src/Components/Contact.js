import React from 'react';
import './Contact.css';
import stackOverflow from '../resources/stackoverflow.png';
import gitHub from '../resources/github.png';

function Contact() {
    return (
    <div id="contact" className="flex-centered">
        <h1>Contact Me</h1>
        <p>Need Web Development services?<br/><br/>
        Drop me an email at:<br/>
        <span id="email">james@jamesjuliusdarby.com</span> or fill out the form below for an initial consultation and quote within 24 hours.</p>
        
        <form className="flex-centered">
            <h2>Name:</h2>
            <input className="oneliner" type="text" placeholder="Name..."/>
            <h2>Email:</h2>
            <input className="oneliner"  type="text" placeholder="Email..."/>
            <h2>Message:</h2>
            <textarea id="message" placeholder="Message..."></textarea>
            <button type="submit">Send</button>
        </form>

        <span className="separation-bar"></span>
        <div id="socials" className="flex-centered">
            <a href="https://github.com/waterways12" target="_blank"><img src={gitHub} alt="github" height="auto" width="80px"/></a>
            <a href="https://stackexchange.com/users/16479864/james-darby" target="_blank"><img src={stackOverflow}  height="auto" width="200px" alt="stack overflow"/></a>
        </div>
    <span id="copyright">© James Darby {new Date().getFullYear()}</span>
    </div>
    )
}

export default Contact;