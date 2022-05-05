import React from 'react'
import Linkedin from '../images/linkedin.png';
import Twitter from '../images/twitter.png';
import './css/About.css';

export const About = () => {
  return (
    <div className='about'>
        <h4>About Me</h4>
        <p>Raji is a passionate and goal driven Techpreneur 
            whose interest is in using technology to build solutions to
            solve real world problems.</p>
            <div className="about-img">
                  <div className="linkedin">
                    <img src={Linkedin} alt="linkedin icon" />
                  </div>
                  <div className="twitter">
                    <img src={Twitter} alt="twitter icon" />
                  </div>
                </div>
    </div>
  )
}
