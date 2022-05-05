import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './css/Contact.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-socio'>
            <h1>Get In Touch.</h1>
            <p>Whelther is a project or just a chat.</p>
            <div className="socio">
                <div className="linkedin-wrap">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-3x linkedin"  ></FontAwesomeIcon>
                </div>
                   <div className="twitter-wrap">
                     <FontAwesomeIcon icon={faTwitter} className="fa-3x twitter"  ></FontAwesomeIcon> 
                   </div>
                   <h4>-rajiss-ctrl</h4>
            </div>
            <div className="email">
                <FontAwesomeIcon icon={faEnvelope} className="fa-3x email-icon"  ></FontAwesomeIcon>
                <div className="email-wrap">
                    <a href="mailto:omosanjos77@gmail.com">omosanjos77@gmail.com</a>
                <p>Send a message anytime! </p>
                </div>
            </div>
            <div className="phone">
                <FontAwesomeIcon icon={faPhone} className="fa-3x phone-icon"  ></FontAwesomeIcon>
                <div className="phone-wrap">
                    <a href="/">+23408155975040</a>
                <p> Give me a call! </p>
                </div>
            </div>
        </div>
        <div className='contact-form'>
            <h3>Need a srvice?</h3>
            <h1>Send A Message</h1>

            <form action="">
                <input type="text" placeholder='Enter Fullname'/>
                <input type="email" placeholder='Enter Email'/>
                <textarea name="" id="" placeholder='Enter Message'></textarea>
                <button>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact