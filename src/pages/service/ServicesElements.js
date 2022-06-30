import styled from 'styled-components'
import {FaDev} from 'react-icons/fa'

export const ServicesContainer = styled.div`
     width: 100%;
    min-height: 600px;
    background: #FBFCFE;
    padding: 0 70px;

`
export const ServicesH1 = styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    padding-top: 113px;
    letter-spacing: -0.03em;
    color: #000000;
`
export const ServicesP = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 27px;
    padding-right: 55%;
    margin-bottom: 30px;
    color: #000000;
        @media screen and (max-width:912px){
        padding-right: 0;
    }
`
export const ServicesList = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    @media screen and (max-width:912px){
        width:100%;
         grid-template-columns: repeat(2,1fr);
    }

    
    @media screen and (max-width:600px){
        width:100%;
         grid-template-columns: repeat(1,1fr);
    }
    
`
export const ServicesListWrapper = styled.div`

`
export const ServicesListWrapperH2 = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.01em;
    color: #000000;
`
export const ServicesListWrapperP = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #6B6B6B;
`
export const ServiceImg = styled.img`
width:100px;
`