import React from 'react'
import { Outlet } from 'react-router-dom'
import NavTop from '../NavTop/NavTop'

type Props = {}

const Layout = (props: Props) => {
  return (
    <>   
    <NavTop/>
        <main>
            <Outlet/>
        </main>
    <footer/>
    </>
  )
}

export default Layout