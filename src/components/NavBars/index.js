import React, { useState } from 'react'
import Navbar from './NavBar'

const Navs = () => {
  const [isOpen,setIsOpen] = useState(false)

  const handleToggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar isOpen={isOpen} handleToggle={handleToggle}/>
    </>
  )
}

export default Navs