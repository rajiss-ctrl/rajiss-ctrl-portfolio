import React from 'react'
import { HeaderSectionNav } from '../HeaderSectionNav'
import { HeaderSectionSocio } from '../HeaderSectionSocio'
import Linkedin from '../images/linkedin.png';
import Twitter from '../images/twitter.png';
import Rajiss from '../images/rajiss.png';
import './css/Header.css'

export const Header = () => {
  return (
    <header>
        <div className="header-content">
            <HeaderSectionNav/>
            <img src="" alt="" />
            <div className="content">
              <h3>HI THERE </h3>
              <h2>I AM RAJI SARAFADEEN SANJO</h2>
              <h1>A Top-notch Developer, Writer and Mentor.</h1>
                <div className="content-img">
                  <div className="linkedin">
                    <img src={Linkedin} alt="linkedin icon" />
                  </div>
                  <div className="twitter">
                    <img src={Twitter} alt="twitter icon" />
                  </div>
                </div>
            </div>
        </div>
        <div className="profile-img">
            <HeaderSectionSocio/>

            <div className="img">
              <img src={Rajiss} alt="" />
            </div>
        </div>
    </header>
  )
}
