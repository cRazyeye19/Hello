import React from 'react'
import './header.css'
import Logo from '../Logo/Logo'
import Username from '../Username/Username'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <Logo />
      <Username />
      <Navigation />
    </header>
  )
}

export default Header