import styled from 'styled-components'
import { FaCss3, FaGit, FaHtml5, FaJs, FaMicrosoft, FaReact } from 'react-icons/fa'

export const SkillContainer = styled.div`
    width: 100%;
    padding: 0 70px;
    margin-bottom: 50px;
`
export const SkillH4 = styled.h4`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    margin-top: 96px;
    letter-spacing: -0.03em;
    color: #000000;
`
export const SkillP = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #4D4D4D;
`
export const SkillSetWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 30px 0 96px 0;
`
export const SkillIconWrapper = styled.div`
    transition: .3s ease-in-out;
    text-align: center;
    margin-top: 30px;
`
export const SkillIconWrapperH3 = styled.h3`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 41px;
    letter-spacing: -0.03em;
    color: #000000;
`
export const HtmlIcon = styled(FaHtml5)`
    color: #f7c25e;
    transition: .3s ease-in-out;
    font-size:80px;
    &:hover{
    color: #ffa500;
    }
`
export const CssIcon = styled(FaCss3)`
    color: #4848ca;
    transition: .3s ease-in-out;
    font-size:80px;
    &:hover{
    color: #0a0aff;
    }
`
export const JsIcon = styled(FaJs)`
    color: #eded65;
    transition: .3s ease-in-out;
    font-size:80px;
    &:hover{
      color: #fafa18;
    }
`
export const ReactIcon = styled(FaReact)`
    color: #94ebeb;
    transition: .3s ease-in-out;
    font-size:80px;
    &:hover{
      color: #07fefe;
    }
`
export const GitIcon = styled(FaGit)`
    color: #d35426;
    transition: .3s ease-in-out;
    font-size:80px;
    &:hover{
      color:#ed4609 ;
    }
`
export const MicrosoftIcon = styled(FaMicrosoft)`
    color: #3333f0;
    transition: .3s ease-in-out;
    font-size:80px;
    &:hover{
      color: #0a0ab6;
    }
`