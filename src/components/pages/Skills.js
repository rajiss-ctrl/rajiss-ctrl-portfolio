import React from 'react'
import './css/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCss3, faGit, faHtml5,  faJs, faMicrosoft,  faReact } from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
  return (
    <div className='skills-section'>
        <h4>My Skills</h4>
        <p>Here are a few skills i possess:</p>

        <div className='skill-set'>
              <div className='html-wrapper' >
                <h3>HTML</h3>
                  <FontAwesomeIcon icon={faHtml5} className="fa-4x html"  ></FontAwesomeIcon>
              </div>
              <div className="css-wrapper">
                <h3>CSS</h3>
                  <FontAwesomeIcon icon={faCss3} className="fa-4x css"></FontAwesomeIcon>
              </div>
              <div className="js-wrapper">
                <h3>JavaScript</h3>
                  <FontAwesomeIcon icon={faJs} className="fa-4x js"></FontAwesomeIcon>
              </div>
            
              <div className="react-wrapper">
                <h3>ReactJs</h3>
                <FontAwesomeIcon icon={faReact} className="fa-4x react" ></FontAwesomeIcon>
              </div>
              <div className="git-wrapper">
                <h3>git</h3>
                  <FontAwesomeIcon icon={faGit} className="fa-4x git" ></FontAwesomeIcon>
              </div>
              <div className="microsoft-wrapper">
                <h3>Microsoft office suit</h3>
                  <FontAwesomeIcon icon={faMicrosoft} className="fa-4x microsoft"></FontAwesomeIcon>
              </div>
        </div>
            
            
           
            
        
      
        

    </div>
  )
}
