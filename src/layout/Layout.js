import React from 'react'
import { Outlet } from 'react-router-dom'

import AppBar from '../Components/appBar/AppBar'
import Footer from '../Components/footer/Footer'
import Header from '../Components/header/Header'

const Layout = () => {
  return (
    <>
      <Header>
        <AppBar/>
      </Header>

        <Outlet/>
        
      <Footer/>
    </>
    
  )
}

export default Layout