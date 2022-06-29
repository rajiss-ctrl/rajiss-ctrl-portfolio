import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';


export const AboutContainer = styled.div`
     width: 100%;
    height: 434px;
    text-align: center;
    background: #F6F8FE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const AboutH4 = styled.h4`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #000000;
`

export const AboutParagraph = styled.p`
    padding: 0 34%;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #4D4D4D;
`
export const AboutButtonWrap = styled.div`
    display:grid;
    place-content:center;
`
export const AboutButton = styled(LinkR)`
    outline:none;
    border:none;
    border-radius:15px;
    border:1px solid lightblue;
    width:140px;
    padding:10px;
    margin-top:15px;
    cursor:pointer;
    text-decoration:none;
    color:#000000;
`