import React from 'react'
import WebRes from '../../images/responsive.png'
import WebPro from '../../images/webpto.png'
import WebSoftware from '../../images/sofware.png'
import { DevIcon, ServiceImg, ServicesContainer, ServicesH1, ServicesList, ServicesListWrapper, ServicesListWrapperH2, ServicesListWrapperP, ServicesP } from './ServicesElements';

export const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Services I Render.</ServicesH1>
        <ServicesP>
            These are the variuos services are can offer, in helping 
            companies and businesses to achieve their aims and objectives.
        </ServicesP>
        <ServicesList>
            <ServicesListWrapper>
                <ServiceImg src={WebPro} alt="" />
                <ServicesListWrapperH2>Web Development</ServicesListWrapperH2>
                <ServicesListWrapperP>
                    I help different businesses in developing their web site to showcase their products
                    online.
                </ServicesListWrapperP>
            </ServicesListWrapper>
            <ServicesListWrapper>
                <ServiceImg src={WebSoftware} alt="" />
                <ServicesListWrapperH2>Customer Software Development</ServicesListWrapperH2>
                <ServicesListWrapperP>
                    I help develop tehnical solutions in form of softwarres
                    that answer to the needs of customer’s problems.
                </ServicesListWrapperP>
            </ServicesListWrapper>
            <ServicesListWrapper>
                <ServiceImg src={WebRes} alt="" />
                <ServicesListWrapperH2>Responsive Web Design</ServicesListWrapperH2>
                <ServicesListWrapperP>
                    I Help design Mobile-friendly, worldclass websites 
                    that helps scales your bussiness and helps user experience get better.
                </ServicesListWrapperP>
            </ServicesListWrapper>
        </ServicesList>
    </ServicesContainer>
    


  )
}
