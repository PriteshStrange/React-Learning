import React from 'react';
import { Links } from './Links'

const Sidebar = () => {
  return (
    <div className='links-container show-container'>
                <ul className='links'>
                    {
                        Links.map((val)=>{
                            const {id,text,url} = val;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
  )
}

export default Sidebar