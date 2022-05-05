import React from 'react'
import './HeaderSectionSocio.css';
import Linkedin from './images/linkedin.png';
import Twitter from './images/twitter.png';


export const HeaderSectionSocio = () => {
  return (
    <>
        <nav className='socio'>
         <div className="socio-icons">
            <div className="linkedin">
              <img src={Linkedin} alt="linkedin icon" />
            </div>
              <div className="twitter">
              <img src={Twitter} alt=" twitter icon" />
            </div>
         </div>
        </nav>
    </>
  )
}
