import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height:80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:1rem;
    padding: 39px 80px;
    position: relative; 
    top:0;
    z-index: 10;
    background: transparent;
    @media screen and (max-width:912px){
        /* background:  #cddcf8; */
        transition:0.3s all ease;
        padding: 39px 60px;
    }

`
export const NavbarLogo = styled.h5`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    /* letter-spacing: -0.03em; */
    color: #000000;
`
export const NavContainer = styled.ul`
    display: flex;
    height:80px;
    justify-content: space-between;
    align-items: center;
    padding-right: 15%;
    z-index:1;
    /* max-width:1100px; */
    color:#000000;
    /* padding:0 20px; */

     @media screen and (max-width:912px){
    background:#ffffff;
    position:absolute;
    border-radius:100px 0 200px;
    padding-left:40px;
    right:0;
    width:100%;
    min-height:700px;
    display:block;
    padding-top:90px;
    transition:0.3s ease-in-out;
    display:${({ isOpen }) => (isOpen ? 'block' : 'none')};
    /* opacity:${({ isOpen }) => (isOpen ? '100%' : '0')}; */
    top:${({ isOpen }) => (isOpen ? '80px' : '-100%')}
      }
`
export const NavList = styled.li`
     list-style: none;
    /* margin-left: 15px; */
    margin: auto 10px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.01em;
    @media screen and (max-width:912px){
    font-size: 23px;
    margin-top:60px;
    }
`
export const AnchorScroll = styled(LinkS)`
    color:#000000;
    text-decoration: none;
    cursor:pointer;
    
    @media screen and (max-width:912px){
    color:#000000;
    }
`
export const AnchorRouter = styled(LinkR)`
    color: #000000;
    text-decoration: none;
`

export const SocioIconContainer = styled.div`
    display: flex;
   `
export const HeroLinkedinWrap = styled.div`
    display: grid;
    place-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #2351dc;
    border-radius: 50%;
    margin:20px 15px 0 0;

     @media screen and (max-width:912px){
    display:none;
      }
`
export const LinkedIn = styled(FaLinkedin)`
    width: 13px;
    height: 13px;
    color:#2351dc;
`
export const HeroTwitterWrap = styled.div`
    display: grid;
    place-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #2351dc;
    border-radius: 50%;
    margin:20px 15px 0 0;
     @media screen and (max-width:912px){
          display:none;
      }
`
export const Twitter = styled(FaTwitter)`
    width: 13px;
    height: 13px;
    color:#2351dc;
`
export const MenuIcon = styled.div`
    display:none;
     @media screen and (max-width:912px){
        display:block;
        font-size: 50px;
         position:relative;
        transform:translate(-100%, 60%)
        cursor:pointer;
        color: grey;
        top:-20px;
      }
     @media screen and (max-width:600px){
        font-size: 30px;
      }
`
export const BarsIcon = styled(FaBars)`
        transform:translate(-100%, 60%)
        cursor:pointer;
        color: grey;
         position:absolute;
         right:0;
     display:${({ isOpen }) => (isOpen ? 'none' : 'block')};
    
        /* opacity:${({ isOpen }) => (isOpen ? '0' : '100%')};
        top:${({ isOpen }) => (isOpen ? '-100%' : '0')} */
`
export const CloseIcon = styled(FaTimes)`
         transform:translate(-100%, 60%)
        cursor:pointer;
        color: grey;
        position:absolute;
        right:0;
        display:${({ isOpen }) => (isOpen ? 'block' : 'none')};
     /* opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:${({ isOpen }) => (isOpen ? '0' : '-100%')} */
`
