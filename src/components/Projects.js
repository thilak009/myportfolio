import React from 'react';
import cocktail from '.././images/cocktails-project.jpg';
import colorGenerator from '.././images/color-generator.png';
import stripeMenu from '.././images/stripe-menu.png';
import githubUsers from '.././images/github-users.png';
import crypto from '.././images/crypto.png';
import discord from '.././images/discord-clone.png';
import {FaGitAlt} from 'react-icons/fa';

function Projects(){

    return(
      <section className="s1">
      <div className="main-container">
        <h3 style={{textAlign: 'center'}}><FaGitAlt/> Some of my projects</h3>
        
        <div className="post-wrapper">

            <div>
              <div className="post">
                <img src={githubUsers} className="thumbnail" alt="image3"></img>
                <div className="post-preview">
                  <h6 className="post-title">Github Users Search</h6>
                  <p className="post-intro">Search github users and their data is represenred in charts.</p>
                  <a href="https://github-userinfo.netlify.app/" target="_blank" rel='noreferrer'>Check out</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img src={discord} className="thumbnail" alt="image3"></img>
                <div className="post-preview">
                  <h6 className="post-title">Discord Clone</h6>
                  <p className="post-intro">Simple chat application like discord where you can create channels and chat.</p>
                  <a href="https://discord-clone-7449c.web.app/" target="_blank" rel='noreferrer'>Check out</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img src={crypto} className="thumbnail" alt="image3"></img>
                <div className="post-preview">
                  <h6 className="post-title">Crypto Tracker</h6>
                  <p className="post-intro">Get Cryptocurrencies details like price,market cap etc</p>
                  <a href="https://gocrypto.netlify.app/" target="_blank" rel='noreferrer'>Check out</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img src={cocktail} className="thumbnail" alt="image3"></img>
                <div className="post-preview">
                  <h6 className="post-title">Cocktail Search</h6>
                  <p className="post-intro">Search for different cocktails and find their details</p>
                  <a href="https://cocktail-react-project.netlify.app/" target="_blank" rel='noreferrer'>Check out</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img src={colorGenerator} className="thumbnail" alt="image2"></img>
                <div className="post-preview">
                  <h6 className="post-title">Color Generator</h6>
                  <p className="post-intro">Type in any color in hex and get different shades of it</p>
                  <a href="https://color-generator-react.netlify.app/" target="_blank" rel='noreferrer'>Check out</a>
                </div>
              </div>
            </div>
            <div>
              <div className="post">
                <img src={stripeMenu} className="thumbnail" alt="image3"></img>
                <div className="post-preview">
                  <h6 className="post-title">Stripe Menu Bar</h6>
                  <p className="post-intro">Navbar design inspired from the stripe website,made with react.</p>
                  <a href="https://stripe-menu-bar.netlify.app/" target="_blank" rel='noreferrer'>Check out</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    );
}

export default Projects;