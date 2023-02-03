import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' style={({isActive})=>{
            return {color:isActive ? 'red' : 'yellow'}
        }}>Home </NavLink>
        <NavLink to='/about' style={({isActive})=>{
            return {color:isActive ? 'red' : 'yellow'}
        }}>About </NavLink>
        <NavLink to='/product' style={({isActive})=>{
            return {color:isActive ? 'red' : 'yellow'}
        }}>Product </NavLink>
        <NavLink to='/login' style={({isActive})=>{
            return {color:isActive ? 'red' : 'yellow'}
        }}>Login </NavLink>
         

    </nav>
  )
}

export default Navbar