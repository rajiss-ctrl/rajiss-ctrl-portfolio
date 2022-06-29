import { FaEnvelope, FaLinkedin, FaTwitter} from 'react-icons/fa'
import styled from "styled-components";

export const FooterContainer =styled.footer`
    padding: 70px;
    text-align: center;
    background: #07102C;
`
export const FooterLineWrapper =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const FooterLine =styled.div`
    background: grey;
    height: 2px;
    width: 34%;
`
export const FooterH1 =styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: -0.03em;
    margin: 0 10px;
    /* White */
    
    color: #FFFFFF;
`

export const FooterSocioWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const FooterSocioIconWrapper = styled.div`
    border: 1px solid #FFFFFF;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    margin: 20px 10px;
`
export const FooterLinkedin = styled(FaLinkedin)`
    color: #FFFFFF;
    width: 20px;
`
export const FooterTwitter = styled(FaTwitter)`
    color: #FFFFFF;
    width: 20px;
`
export const FooterEnvelope = styled(FaEnvelope)`
    color: #FFFFFF;
    width: 20px;
`
export const FooterPre = styled.pre`
  color: #FFFFFF;
  `
