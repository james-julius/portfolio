import React, {useState} from 'react';
import './Contact.css';
import stackOverflow from '../resources/stackoverflow.png';
import gitHub from '../resources/github.png';

function Contact() {
    const handleSubmit = (e) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwT3X03QMhhfPifqFKHHFeT-NnMMXolapdpEbYTzJ5nvnKkBnw/exec';
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(e.target)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    }
          

    return (
    <div id="contact" className="flex-centered">
        <a class="anchor" id="contact-anchor"></a>
        <span className="separation-bar" id="contact-separator"></span>
        <h1>Contact Me</h1>
        <p>Need Web Development services?<br/><br/>
        Drop me an email at:<br/>
        <span id="email">james@jamesjuliusdarby.com</span> or fill out the form below for an initial consultation and quote within 24 hours.</p>
        
        <form id="contactform" className="flex-centered" onSubmit={handleSubmit}>
            <h2>Name:</h2>
            <input className="oneliner" name="name" type="text" placeholder="Name..."/>
            <h2>Email:</h2>
            <input className="oneliner" name="email" type="text" placeholder="Email..."/>
            <h2>Message:</h2>
            <textarea id="message" name="message" placeholder="Message..."></textarea>
            <button type="submit">Send</button>
        </form>

        <span className="separation-bar" id="social-separator"></span>
        <div id="socials" className="flex-centered">
            <a href="https://github.com/waterways12" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="github" height="auto" width="70px"/></a>
            <a id="stack-overflow" href="https://stackexchange.com/users/16479864/james-darby" target="_blank" rel="noopener noreferrer" height="auto" width="100px"><img src={stackOverflow}  height="auto" width="200px" alt="stack overflow"/></a>
        </div>
    <span id="copyright">© James Darby {new Date().getFullYear()}</span>
    </div>
    )
}

export default Contact;