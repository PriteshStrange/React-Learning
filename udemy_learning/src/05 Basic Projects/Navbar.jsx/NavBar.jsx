import React,{ useState, useRef,useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import logo from "../../images/sdata1.jpeg"
// import Sidebar from './Sidebar'
import { Links } from './Links'


const NavBar = () => {
    const [links,setLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        const linkHight = linkRef.current.getBoundingClientRect();
        console.log(linkHight);
    },[links])

    
  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='logo'/>
                <button className='nav-toggle' onClick={() => setLinks(!links)}>
                    <FaBars/>
                </button>
            </div>
            {links && (
            <div className={`${setLinks ? 'links-container show-container':'links-container'}`}>
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
        </div>)
            }
        </div>
    </nav>
  )
}

export default NavBar