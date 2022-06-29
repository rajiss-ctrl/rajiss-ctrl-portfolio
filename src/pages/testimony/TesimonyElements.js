import styled from "styled-components";

export const TestimonyContainer = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-width:912px){
        flex-direction:column;
    }
`
export const TestimonySection = styled.section`
    background: #1F49C6;
    width: 40%;
    display: grid;
    place-content: center;
  @media screen and (max-width:912px){
        width:100%;
        min-height:300px;
    }   
`
export const TestimonySectionH1 = styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 63px;
    letter-spacing: -0.03em;
    padding-left: 100px;
    /* White */
    
    color: #FFFFFF;
      @media screen and (max-width:912px){
        padding-left:0;
    } 
`
export const TestimonyAside = styled.aside`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
      @media screen and (max-width:912px){
        width:100%;
    } 
`
export const TestimonyAsideH2 = styled.h2`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 35px;
/* identical to box height, or 146% */

text-align: center;
letter-spacing: -0.02em;
font-feature-settings: 'liga' off;

color: #000000;
`

export const TestimonyCard =styled.div`
    text-align: center;
    padding: 30px;
`
export const TestimonyAsideP =styled.p`
    padding: 15px 25px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    color: #24292E;
`
export const TestimonyImage =styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
`