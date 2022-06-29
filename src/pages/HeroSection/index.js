import React from 'react'
import Rajiss from '../../images/rajiss.png';
import {
   HeroContainer,
  HeroSectionWrap,
  HeroHeader,
   HeroH3,
    HeroH2,
     HeroH1,
      HeroSocioIconContainer,
       HeroLinkedinWrap,
        HeroTwitterWrap,
         HeroProfileContainer,
          HeroProfileImg, 
          Twitter,
          LinkedIn,
          HeroHeaderContent} from './HeroElements';


 const HeroSection = () => {
  return (
 <HeroContainer>
  <HeroSectionWrap>
        <HeroHeader>
          <HeroHeaderContent>
              <HeroH3>HI THERE!</HeroH3>
              <HeroH2>I AM RAJI SARAFADEEN SANJO</HeroH2>
              <HeroH1>A Top-notch Web Developer, Writer and Mentor.</HeroH1>
              <HeroSocioIconContainer>
                <HeroLinkedinWrap>
                    <LinkedIn/>
                </HeroLinkedinWrap>
                <HeroTwitterWrap>
                    <Twitter/>
                </HeroTwitterWrap>
              </HeroSocioIconContainer>
          </HeroHeaderContent>
        </HeroHeader>
              <HeroProfileContainer>
                <HeroProfileImg src={Rajiss} alt="Raji Srafadeen Sanjo"/>
              </HeroProfileContainer>
         </HeroSectionWrap>
    </HeroContainer>
  )
}
export default HeroSection