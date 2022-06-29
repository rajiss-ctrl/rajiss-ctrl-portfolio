import React from 'react'
import { FooterContainer, FooterEnvelope, FooterH1, FooterLine, FooterLineWrapper, FooterLinkedin, FooterPre, FooterSocioIconWrapper, FooterSocioWrapper, FooterTwitter } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLineWrapper>
            <FooterLine></FooterLine>
            <FooterH1>Raji Sarafadeen Sanjo</FooterH1>
            <FooterLine></FooterLine>
        </FooterLineWrapper>
        <FooterSocioWrapper>
                <FooterSocioIconWrapper>
                    <FooterLinkedin/>
                </FooterSocioIconWrapper>
                <FooterSocioIconWrapper>
                    <FooterTwitter/>
                </FooterSocioIconWrapper>
                <FooterSocioIconWrapper>
                    <FooterEnvelope/>
                </FooterSocioIconWrapper>
        </FooterSocioWrapper>
        <FooterPre>Copyright  &copy;  2022 |  Alright  reserved</FooterPre>
    </FooterContainer>


  )
}

export default Footer