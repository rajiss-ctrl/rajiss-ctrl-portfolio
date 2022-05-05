import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './css/Footer.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
        <div className="footer-wrap">
            <div></div>
            <h1>Raji Sarafadeen Sanjo</h1>
            <div></div>
        </div>
       <div className='footer-socio-icon'>
            <div className="linkedin-wrap">
           <FontAwesomeIcon icon={faLinkedin} className="fa-4x linkedin"  ></FontAwesomeIcon>
         </div>
         <div className="twitter-wrap">
         <FontAwesomeIcon icon={faTwitter} className="fa-4x twitter"  ></FontAwesomeIcon>
         </div>
         <div className="envelope-wrap">
         <FontAwesomeIcon icon={faEnvelope} className="fa-4x envelope"  ></FontAwesomeIcon>
         </div>
       </div>

        <pre>Copyright  &copy;  2022 |  Alright  reserved</pre> 
    </footer>
  )
}

export default Footer