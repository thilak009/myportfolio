import React from 'react';

function AboutMe(){

    return(
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More About Me</h4>
            <p style={{fontSize: '20px'}}>I am currently in my 3rd year of Computer Science Engineering, i am a React Js developer who is interested
              in the design and overall User Experience of the things i build.
            </p>
            <p style={{fontSize: '20px'}}>I am interested in space technology, sustainability, psychology, Anime so if you are interested 
              in this we should talk, always looking to make friends.
            </p>
          
            <hr></hr>

            <h4>TOP EXPERTISE</h4>
            <p>Front End Developement</p>
            <p>Problem Solving</p>
            <p>Skills/Technologies:</p>
            <div id="skills">
              <ul>
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
              <ul>
                <li>C/C++</li>
                <li>Java</li>
              </ul>
            </div>
            </div>
           
        </div>
      </div>
    </section>
    );

}
export default AboutMe;