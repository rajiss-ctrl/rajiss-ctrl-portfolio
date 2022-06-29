import React from 'react'
import Footer from '../components/footer/Footer'
import Navs from '../components/NavBars'

import About from './about/About'
import Contact from './contact/Contact'
import HeroSection from './HeroSection'
import { Projects } from './projects/Projects'
import { Services } from './service/Services'
import { Skills } from './skills/Skills'
import Testimony from './testimony/Testimony'

const Pages = () => {
  return (
    <>
    <Navs/>
        <HeroSection/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Testimony/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Pages