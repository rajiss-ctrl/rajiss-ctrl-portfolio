import React from 'react'
import { AboutButton, AboutButtonWrap, AboutContainer, AboutH4, AboutParagraph } from './AboutElements'

const About = () => {
  return (
    <AboutContainer>
         <AboutH4>About Me</AboutH4>
        <AboutParagraph>
            Raji is a passionate and goal driven Techpreneur 
            whose interest is in using technology to build solutions to
            solve real world problems.
        </AboutParagraph>
            <AboutButtonWrap>
                <AboutButton to='/profile'>More About me</AboutButton>
            </AboutButtonWrap>
    </AboutContainer>
  )
}

export default About