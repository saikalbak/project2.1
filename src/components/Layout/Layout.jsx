import React from 'react'
import Burger from '../Burger/Burger'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <>
    <Burger/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout