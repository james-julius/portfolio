import React, {useState} from 'react';
import './Contact.css';
import stackOverflow from '../resources/stackoverflow.png';
import gitHub from '../resources/github.png';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name + '||' + email + '||' + message);
    }

    return (
    <div id="contact" className="flex-centered">
        <a class="anchor" id="contact-anchor"></a>
        <span className="separation-bar" id="contact-separator"></span>
        <h1>Contact Me</h1>
        <p>Need Web Development services?<br/><br/>
        Drop me an email at:<br/>
        <span id="email">james@jamesjuliusdarby.com</span> or fill out the form below for an initial consultation and quote within 24 hours.</p>
        
        <form className="flex-centered" onSubmit={handleSubmit}>
            <h2>Name:</h2>
            <input className="oneliner" type="text" placeholder="Name..." onChange={(e) => setName(e.target.value)}/>
            <h2>Email:</h2>
            <input className="oneliner"  type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
            <h2>Message:</h2>
            <textarea id="message" placeholder="Message..." onChange={(e) => setMessage(e.target.value)}></textarea>
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