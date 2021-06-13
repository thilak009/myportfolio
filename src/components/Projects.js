import React from 'react';
import data from '../data';
import {FaGitAlt} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi'


function Projects(){

    return(
      <section className="s1">
      <div className="main-container">
        <h3 style={{textAlign: 'center'}}><FaGitAlt/> Some of my projects</h3>
        <div className="post-wrapper">
            {
              data.map((project)=>{
                const {image, title, description, liveLink, githubLink} = project
                return(
                  <div>
                    <div className="post">
                      <img src={image} className="thumbnail" alt="image3"></img>
                      <div className="post-preview">
                        <h6 className="post-title">{title}</h6>
                        <p className="post-intro">{description}</p>
                        <div style={{display:"flex",gap:"5px"}}>
                          <a href={liveLink} target="_blank" rel='noreferrer'><BiLinkExternal/></a>
                          {
                            githubLink && <a href={githubLink} target="_blank" rel='noreferrer'><AiFillGithub/></a>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </section>
    );
}

export default Projects;