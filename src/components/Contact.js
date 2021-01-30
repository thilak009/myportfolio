import React from 'react';
import {FaTwitter,FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa';

function Contact(){

    return(
        <section className="s2">
        <div className="main-container">
            <h3 style={{textAlign: 'center'}}>Get in Touch</h3>

            <form id="contact-form" method="POST" data-netlify="true" name="portfolio-contact">
                <label>Name</label>
                <input className="input-field" type="text" name="name"></input>

                <label>Subject</label>
                <input className="input-field" type="text" name="subject"></input>
          
                <label>Email</label>
                <input className="input-field" type="text" name="email"></input>
          
                <label>Message</label>
                <textarea className="input-field" type="text" name="message"></textarea>

                <input id="submit-btn" type="submit" value="Send"></input>
            </form>
        </div>
        <div className="social-links" >
        
            <ul>
            <li><a id="twitter-icon" href="https://twitter.com/thilak_reddy_ch?s=08" target="_blank" rel='noreferrer'>
                <FaTwitter/>
            </a></li>
            <li><a id="github-icon" href="https://github.com/thilak009" target="_blank" rel='noreferrer'>
                <FaGithub/>
            </a></li>
            <li><a id="linkedin-icon" href="https://www.linkedin.com/in/thilak-reddy-87ab4b1b3" target="_blank" rel='noreferrer'>
                <FaLinkedin/>
            </a></li>
            <li><a id="instagram-icon" href="https://instagram.com/thilak_reddy_9?igshid=1623bpobg9k5t" target="_blank" rel='noreferrer'>
                <FaInstagram/>
            </a></li>
            </ul>
        </div>
    </section>
    );
}

export default Contact;