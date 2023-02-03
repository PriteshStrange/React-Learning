import React from 'react'
import {Links} from './Links'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context';

const Slider = () => {
    const {isSidebar,closeSider} = useGlobalContext();
  return (
    <aside className={`${isSidebar ? 'sidebar show-sidebar':'sidebar'}`}>
        <div className='sidebar-header'>
            <button className='close-btn' onClick={closeSider}>
                <FaTimes/>
            </button>
        </div>
        <ul className='links'>
            {
                Links.map((val)=>{
                    const {url,text,id} = val;
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                })
            }
        </ul>
    </aside>
  )
}

export default Slider