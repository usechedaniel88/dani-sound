import React from 'react'
import { Outlet } from 'react-router-dom'
import NavTop from '../NavTop/NavTop'
import Footer from '../Footer/Footer'
import { LayoutStyled } from './layout.style'

type Props = {}

const Layout = (props: Props) => {
  return (
    <>
  
    <NavTop/>
        <main>
            <Outlet/>
        </main>
    <Footer/> 
    </>
  )
}

export default Layout