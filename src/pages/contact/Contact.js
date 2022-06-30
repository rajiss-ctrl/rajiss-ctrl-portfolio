import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactContainer, ContactEmail, ContactExLink, ContactForm, ContactFormBtn, ContactFormH1, ContactFormH3, ContactFormInput, ContactFormTextarea, ContactFormWrapper, ContactLinkedin, ContactPhone, ContactSocioH1, ContactSocioH4, ContactSocioP, ContactSocioWrapper, ContactTwitter, EmailPhoneWrapper, EmailPhoneWrapperP, LinkedinTwitterWrapper, SocioWrapper } from './ContactElements';

const Contact = () => {
  return (
    <ContactContainer id='contact'>
            <ContactSocioWrapper>
                <ContactSocioH1>Get In Touch.</ContactSocioH1>
                <ContactSocioP>Whelther is a project or just a chat.</ContactSocioP>
                <SocioWrapper>
                    <LinkedinTwitterWrapper>
                        <ContactLinkedin/>
                    </LinkedinTwitterWrapper>
                    <LinkedinTwitterWrapper>
                        <ContactTwitter/>
                    </LinkedinTwitterWrapper>
                        <ContactSocioH4>-rajiss-ctrl</ContactSocioH4>
                </SocioWrapper>
                <SocioWrapper>
                    <ContactExLink href="/"><ContactEmail/></ContactExLink>
                    <EmailPhoneWrapper>
                        <ContactExLink href="mailto:omosanjos77@gmail.com">omosanjos77@gmail.com</ContactExLink>
                        <EmailPhoneWrapperP>Send a message anytime!</EmailPhoneWrapperP>
                    </EmailPhoneWrapper>
                </SocioWrapper>
                <SocioWrapper>
                    <ContactExLink href="/"><ContactPhone/></ContactExLink>
                    <EmailPhoneWrapper>
                        <ContactExLink href="/">+23408155975040</ContactExLink>
                        <EmailPhoneWrapperP>Give me a call!</EmailPhoneWrapperP>
                    </EmailPhoneWrapper>
                </SocioWrapper>
            </ContactSocioWrapper>
        
            <ContactFormWrapper>
                    <ContactFormH3>Need a srvice?</ContactFormH3>
                    <ContactFormH1>Send A Message</ContactFormH1>
        <ContactForm>
            <ContactFormInput type="text" placeholder='Enter Fullname'/>
            <ContactFormInput type="email" placeholder='Enter Email'/>
            <ContactFormTextarea placeholder='Enter Message'></ContactFormTextarea>
            <ContactFormBtn>Send Message</ContactFormBtn>
        </ContactForm>
            </ContactFormWrapper>
    </ContactContainer>

  )
}

export default Contact