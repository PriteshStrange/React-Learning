import React from 'react'
import Home from './Home'
import Modal from './Modal'
import Slider from './Slider'
import { AppProvider } from './Context'

const NavbarSidebarIndex = () => {
  return (
    <div>
      <AppProvider>
        <Home/>
        <Modal/>
        <Slider/>
      </AppProvider>
    </div>
  )
}

export default NavbarSidebarIndex