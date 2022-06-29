import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export const ContactContainer = styled.div`
 display: flex;
 @media screen and (max-width:912px){
    flex-direction:column;
 }
`
export const ContactSocioH1 = styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    /* identical to box height */
    letter-spacing: -0.03em;
    color: #000000;
`
export const ContactSocioP = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    /* or 169% */
    color: #000000;
`
export const ContactSocioWrapper = styled.div`
    width: 60%;
    padding:  70px;

     @media screen and (max-width:912px){
    width:100%;
 }
`
export const SocioWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`
export const LinkedinTwitterWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid  #2351DC;;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`
export const EmailPhoneWrapper = styled.div`
    display:block;
`
export const ContactExLink = styled.a`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: #000000;
`
export const EmailPhoneWrapperP = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #737373;
`
export const ContactLinkedin = styled(FaLinkedin)`
    color: #2351DC;
    width: 20px;
    height: 20px;
`
export const ContactTwitter = styled(FaTwitter)`
    color: #2351DC;
    width: 20px;
    height: 20px;
`
export const ContactEmail = styled(FaEnvelope)`
    color: #2351DC;
    width: 38px;
    height: 36px;
     margin:10px 10px 0 0;
     &:hover{
        color:#839ff3;
     }
`
export const ContactPhone = styled(FaPhone)`
    color: #2351DC;
    width: 38px;
    height: 36px;
    margin:10px 10px 0 0;
     &:hover{
        color:#839ff3;
     }
`
export const ContactSocioH4 = styled.h4`
    text-align: center;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.03em;
    color: #000000;
`
export const ContactSocioH3 = styled.h3`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.03em;
    color: rgba(255, 255, 255, 0.7);
`
export const ContactFormWrapper =styled.div`
    width: 40%;
    background: #1C41B0;
    padding: 40px;
    display: block;
         @media screen and (max-width:912px){
    width:100%;
 }
`
export const ContactForm =styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const ContactFormInput =styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #FFF;
    background: #1C41B0;
    margin-bottom: 15px;
    font-family: 'Manrope';
    font-style: normal;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.03em;
   
    padding-bottom: 15px;
    &::placeholder {
    color: #FFFFFF;
    opacity: 1;
    font-weight: 400; 
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.03em;
}
`
export const ContactFormTextarea =styled.textarea`
    border: none;
    outline: none;
    border-bottom: 1px solid #FFF;
    background: #1C41B0;
    margin-bottom: 15px;
    font-family: 'Manrope';
    font-style: normal;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.03em;
   
    padding-bottom: 15px;
        &::placeholder {
    color: #FFFFFF;
    opacity: 1;
    font-weight: 400; 
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.03em;
}
`
export const ContactFormBtn =styled.button`
    width: 150px;
    padding: 10px;
    margin-top: 15px;
    background: #FFFFFF;
    /* White */
    border: 1px solid #FFFFFF;
    border-radius: 12px;
     color: #2351DC;
`
export const ContactFormH1= styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.03em;
    
    color: #FFFFFF;
`
export const ContactFormH3= styled.h3`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.03em;
    
    color: rgba(255, 255, 255, 0.7);
`
