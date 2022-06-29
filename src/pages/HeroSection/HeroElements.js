import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'


export const HeroContainer =styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top:-80px;
`
export const HeroSectionWrap =styled.section`
    width:100%;
    display: flex;
    justify-content: center;
    background:#fff;

    @media screen and (max-width:912px){
        margin-top:50px;
        flex-direction: column;
        align-items: center;
        justify-content:space-between;
        min-height: 900px;
        }
        `
export const HeroHeader =styled.header`
    margin-top: 70px;
    width: 60%;
    height: 550px;
    
    @media screen and (max-width:912px){
        margin-top: -50px;
        width: 100%;
        padding:0 60px;
        /* margin-bottom: 70px; */
        display:grid;
        place-content:center;
        }

`
export const HeroHeaderContent =styled.div`
    padding: 0 80px;
    display: grid;
    place-content: center;
    margin-top: 100px;
    @media screen and (max-width:912px){
        padding: 0;
        margin-top: 60px;
    }
`
export const HeroH3 =styled.h3`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: #2351DC;
    @media screen and (max-width:912px){
        font-size: 22px;
    }
`
export const HeroH2 =styled.h2`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.03em;
    color: #2351DC;
@media screen and (max-width:912px){
    font-size: 30px;
}
`
export const HeroH1 =styled.h1`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -0.03em;
    color: #000000;
    padding-left:0;
    @media screen and (max-width:912px){
        line-height: 63px;
        width:100%;
    }
`

export const HeroSocioIconContainer =styled.div`
    display: flex;
`
export const HeroLinkedinWrap =styled.div`
    display: grid;
    place-content: center;
    width: 43px;
    height: 43px;
    border: 1px solid #2351dc;
    border-radius: 50%;
    margin:20px 15px 0 0;
`
export const LinkedIn = styled(FaLinkedin)`
    width: 20px;
    height: 20px;
    color:#2351dc;
`
export const HeroTwitterWrap =styled.div`
    display: grid;
    place-content: center;
    width: 43px;
    height: 43px;
    border: 1px solid #2351dc;
    border-radius: 50%;
    margin:20px 15px 0 0;
`
export const Twitter = styled(FaTwitter)`
    width: 20px;
    height: 20px;
    color:#2351dc;
`

export const HeroProfileContainer = styled.div`
    background: #D3DCF8;
    width: 40%;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const HeroProfileImg = styled.img`
    position: absolute;
    bottom: 0;
    /* right: 100px; */
    width: 300px;
`