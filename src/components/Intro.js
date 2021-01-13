import React from 'react'
import profile from '.././images/AnimeX_820039.jpeg';

function Intro({setTheme}){

    return(
    <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Hi, I'm Thilak Reddy</h1>
          </div>
          <div className="intro-wrapper">
            <div className="nav-wrapper">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
              <ul id="navigation">
                <li><a href="#contact-form" style={{transition: '0.4s'}}>Contact</a></li>
              </ul>
            </div>
            <div className="left-column">
              <img src={profile} alt="profile" id="profile_pic"></img>
              <h5 style={{textAlign: 'center',letterSpacing: '2px'}}>Personalize Theme</h5>
              
              <div id="theme-options-wrapper">
                <div id="light-mode" className="theme-dot" onClick={()=> setTheme('root')}></div>
                <div id="blue-mode" className="theme-dot" onClick={()=> setTheme('blue')}></div>
                <div id="green-mode" className="theme-dot" onClick={()=> setTheme('green')}></div>
                <div id="purple-mode" className="theme-dot" onClick={()=> setTheme('purple')}></div>
              </div>

              <p id="settings-note">*Select a Color theme from above</p>
            </div>
            <div className="right-column">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>What I do</h3>
                  <p>I am a Front End Web Developer.</p>
                  <div id="corner-br" className="corner"></div>
                  <div id="corner-bl" className="corner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Intro;