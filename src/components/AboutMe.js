import React from 'react';

function AboutMe(){

    return(
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More About Me</h4>
            <p style={{fontSize: '20px'}}>I am currently in my 3rd year of Computer Science Engineering,my major work is around the MERN stack for now, but I
            like to try out different technologies which interest me.
            </p>
            <p style={{fontSize: '20px'}}>I am interested in Technology, Space, Sustainability, Psychology, Anime so if you are interested 
              in any of these we can talk, always looking to make friends.
            </p>
          
            <hr></hr>

            <h4>TOP EXPERTISE</h4>
            <div id="skills">
              <ul>
                <li style={{color:"#000",fontSize:"19px"}}>Frontend</li>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <ul>
              <li style={{color:"#000",fontSize:"19px"}}>Backend</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
            </div>
           
        </div>
      </div>
    </section>
    );

}
export default AboutMe;