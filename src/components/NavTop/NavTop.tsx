import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.png'
import { Div1, Div2, Imglogo, Nav } from './navTop.style'




type Props = {}

const NavTop = (props: Props) => {
  return (
   
    <Nav>
      <Div1>
      <Link to='/'><Imglogo src={LogoImg} alt='logo'/></Link>
      <Link to='/'>Soundwave</Link>
      </Div1>
      <Div2>
      <Link to='/discover'>Discover</Link>
      <Link to='/join'>Join</Link>
      </Div2>
    </Nav>
    
  )
}

export default NavTop

