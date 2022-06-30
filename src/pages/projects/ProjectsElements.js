import styled from "styled-components";

export const ProjectsContainer = styled.div`
    padding: 80px 70px;
    background: #FBFCFE;
    /* height: 1000px; */
@media screen and (max-width:912px){
        padding-top: 100px;
    }
`
export const ProjectsH1 = styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    /* identical to box height */
    letter-spacing: -0.03em;
    
    color: #000000;
`
export const ProjectsP = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    /* identical to box height, or 169% */
    color: #000000;
`
export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: minmax(200px,auto); */
    grid-gap:10px;
    /* grid-auto-rows: minmax(150px, auto); */
    width:100%;
    margin: 50px auto  200px auto;
    height: 100vh;
`
export const ProjectsOne = styled.div`
    grid-row: 1/ 7;
    grid-column: 1/2;
    background: #2351DC;
`
export const ProjectsTwo = styled.div`
    grid-row: 1/ 4;  
    grid-column: 2/13;
    background: #0DC397;
`
export const ProjectsThree = styled.div`
    grid-row: 4/ 7;
    grid-column: 2/3;
    background: #0A1842;
`
export const ProjectsFour = styled.div`
     grid-row: 4/ 10; 
    grid-column: 3/13;
    background: #2351DC;
`
export const ProjectsFive = styled.div`
    grid-row: 7/ 13; 
    grid-column: 1/3;
    background: #1C41B0;
`
export const ProjectsSix = styled.div`
    grid-row: 10/ 13; 
    grid-column: 3/13;
    background: #2351DC;
`