import React,{useContext} from 'react'
import { FaBars } from 'react-icons/fa';
import {AppContext,useGlobalContext} from './Context'


const Home = () => {
    const {openSider,openModal} = useGlobalContext();
  return (
    <main>
        <button className='sidebar-toggle' onClick={openSider}>
            <FaBars/>
        </button>
        <button className='btn' onClick={openModal}>
            show Model
        </button>
    </main>
  )
}

export default Home