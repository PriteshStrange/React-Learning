import React from 'react'
import Info from '../Component/Info';
import Navbar from '../Component/Navbar';
import Repos from '../Component/Repos';
import Search from '../Component/Search';
import User from '../Component/User';

const Dashbord = () => {
  return (
    <main>
        <Navbar></Navbar>
        <Search/>
        <Info/>
        <User/>
        <Repos/>
    </main>
  )
}

export default Dashbord