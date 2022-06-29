import React from 'react'
import {
     CssIcon,
      GitIcon,
       HtmlIcon,
        JsIcon,
         MicrosoftIcon,
          ReactIcon, 
          SkillContainer, 
          SkillH4, 
          SkillIconWrapper,
           SkillIconWrapperH3,
            SkillP, 
            SkillSetWrapper } from './SkillsElements';

export const Skills = () => {
  return (
    <SkillContainer>
        <SkillH4>My Skills</SkillH4>
        <SkillP>Here are a few skills i possess:</SkillP>
        <SkillSetWrapper>
            <SkillIconWrapper>
                <SkillIconWrapperH3>HTML</SkillIconWrapperH3>
                <HtmlIcon/>
            </SkillIconWrapper>
            <SkillIconWrapper>
                <SkillIconWrapperH3>CSS</SkillIconWrapperH3>
                <CssIcon/>
            </SkillIconWrapper>
            <SkillIconWrapper>
                <SkillIconWrapperH3>JavaSceipt</SkillIconWrapperH3>
                <JsIcon/>
            </SkillIconWrapper>
            <SkillIconWrapper>
                <SkillIconWrapperH3>ReactJs</SkillIconWrapperH3>
                <ReactIcon/>
            </SkillIconWrapper>
            <SkillIconWrapper>
                <SkillIconWrapperH3>Git</SkillIconWrapperH3>
                <GitIcon/>
            </SkillIconWrapper>
            <SkillIconWrapper>
                <SkillIconWrapperH3>Microsoft office suit</SkillIconWrapperH3>
                <MicrosoftIcon/>
            </SkillIconWrapper>
              
        </SkillSetWrapper>
    </SkillContainer>
    
  )
}
