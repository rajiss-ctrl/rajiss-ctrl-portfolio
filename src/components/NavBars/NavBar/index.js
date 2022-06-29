
import {Nav,
NavContainer,
NavbarLogo, 
NavList,
AnchorScroll,
AnchorRouter,
SocioIconContainer,
HeroTwitterWrap,
HeroLinkedinWrap,
LinkedIn,
Twitter,
MenuIcon,
BarsIcon,
CloseIcon
} from './NavbarElements';



 const Navbar = ({handleToggle, isOpen}) => {
  
  return (
    <>
    <Nav onClick={handleToggle}>
      <AnchorRouter to='/'>< NavbarLogo >Raji</NavbarLogo></AnchorRouter>
      < NavContainer isOpen={isOpen} onClick={handleToggle}>
            <NavList><AnchorScroll  onClick={handleToggle} to='about' exact='true' smooth={true} duration={500} spy={true} offset={-80}>About</AnchorScroll></NavList>
            <NavList><AnchorScroll  onClick={handleToggle} to='skills' exact='true' smooth={true} duration={500} spy={true} offset={-80}>Skills</AnchorScroll></NavList>
            <NavList><AnchorScroll  onClick={handleToggle} to='services' exact='true' smooth={true} duration={500} spy={true} offset={-80}>Services</AnchorScroll></NavList>
            <NavList><AnchorScroll  onClick={handleToggle} to='projects' exact='true' smooth={true} duration={500} spy={true} offset={-80}>Projects</AnchorScroll></NavList>
            <NavList><AnchorScroll  onClick={handleToggle} to='contact' exact='true' smooth={true} duration={500} spy={true} offset={-80}>Contact Me</AnchorScroll></NavList>  
      </NavContainer>
        <SocioIconContainer>
            <HeroLinkedinWrap>
              <LinkedIn/>
            </HeroLinkedinWrap>
              <HeroTwitterWrap>
              <Twitter/>
            </HeroTwitterWrap>
      </SocioIconContainer>
      <MenuIcon onClick={handleToggle} >
          < BarsIcon onClick={handleToggle} isOpen={isOpen}/>
          <CloseIcon onClick={handleToggle} isOpen={isOpen}  />
      </MenuIcon>
    </Nav>
    </>
  )
}
export default Navbar;