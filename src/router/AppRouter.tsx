import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Homepage from '../pages/Homepage/Homepage'
import Joinpage from '../pages/Joinpage/Joinpage'
import DiscoverPage from '../pages/Discoverpage/DiscoverPage'

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <>
    <BrowserRouter>   
        <Routes>
            <Route element={<Layout />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/join" element={<Joinpage />} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter