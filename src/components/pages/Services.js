import React from 'react'
// import Webdev from '../images/webdev.png'
// import CustomServ from '../images/customerservice.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';

import './css/Services.css';
import { faKeyboard, faLaptop,  faMobileAlt} from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
  return (
    <div className='services'>
        <h1>Services I Render.</h1>
        <p>These are the variuos services are can offer, in helping 
            companies and businesses to achieve their aims and objectives.
        </p>

        <div className="services-wrapper">
            <div className="service web">
                <FontAwesomeIcon icon={faDev} className="fa-4x webdev"  ></FontAwesomeIcon>
                <h2>Web Development</h2>
            <p>I help different businesses in developing their web site to showcase their products
                online.</p>
           </div>

           <div className="service customer">
                <FontAwesomeIcon icon={faKeyboard} className="fa-4x webdev"  ></FontAwesomeIcon>
                <h2>Customer Software Development</h2>
            <p>I help develop tehnical solutions in form of softwarres
                 that answer to the needs of customer’s problems.</p>
           </div>
          
           <div className="service responsive">
                 
                  <FontAwesomeIcon icon={faLaptop} className="fa-4x webdev"  ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faMobileAlt} className="fa-4x webdev"  ></FontAwesomeIcon>
                <h2>Responsive Web Design</h2>
            <p>I Help design Mobile-friendly, worldclass websites 
                that helps scales your bussiness and helps user experience get better.</p>
           </div>
        </div>
    </div>
  )
}
