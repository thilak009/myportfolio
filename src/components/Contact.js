import React from 'react';
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa';

function Contact(){

    return(
        <section className="s2">
        <div className="main-container">
            <h3 style={{textAlign: 'center'}}>Get in Touch</h3>

            <form id="contact-form" method="post" data-netlify="true" name="portfolio-contact">

                <input type="hidden" name="form-name" value="portfolio-contact" />

                <label htmlFor="name">Name</label>
                <input className="input-field" type="text" name="name" required></input>

                <label htmlFor="subject">Subject</label>
                <input className="input-field" type="text" name="subject" required></input>
          
                <label htmlFor="email">Email</label>
                <input className="input-field" type="text" name="email" required></input>
          
                <label htmlFor="message">Message</label>
                <textarea className="input-field" type="text" name="message" required></textarea>

                <button id="submit-btn" type="submit">Send</button>
            </form>
        </div>
        <div className="social-links" >
        
            <ul>
            <li><a id="twitter-icon" href="https://twitter.com/thilak_ch" target="_blank" rel='noreferrer'>
                <FaTwitter/>
            </a></li>
            <li><a id="github-icon" href="https://github.com/thilak009" target="_blank" rel='noreferrer'>
                <FaGithub/>
            </a></li>
            <li><a id="linkedin-icon" href="https://www.linkedin.com/in/thilak-reddy-87ab4b1b3" target="_blank" rel='noreferrer'>
                <FaLinkedin/>
            </a></li>
            </ul>
        </div>
    </section>
    );
}

export default Contact;