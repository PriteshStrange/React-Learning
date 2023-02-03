import React, { useEffect, useState } from 'react';
import { FaCalendarTimes, FaEnvelopeOpen, FaLock, FaMap, FaPhone, FaUser } from "react-icons/fa";
const defaultImage = `https://randomuser.me/api/portraits/men/75.jpg`;
const url = `https://randomuser.me/api/`

const IndexRandom = () => {
    const [loading,setLoading] = useState(true);
    const [person,setPerson] = useState(null);
    const [title,setTitle] = useState('Name');
    const [value,setValue] = useState('random value');

    const getUser = async() =>{
        const resp = await fetch(url);
        const data = await resp.json();
        const person = data.results[0];
        const {phone,email} = person;
        const {large:image} = person.picture;
        const {login:{password}} = person;
        const {first,last} = person.name;
        const {dob:{age}} = person;
        const {street:{number,name}} = person.location;

        const newPerson = {
            image,phone,email,password,age,street:`${number}${name}`,name:`${first}${last}`
        }
        setPerson(newPerson);
        setLoading(false);
        setTitle('Name');
        setValue(newPerson.name)
    }

    const handleValue = (e) =>{
        console.log(e.target.classList);
        if (e.target.classList.contains('icon')) {
            const newValue = e.target.dataset.label
            setTitle(newValue)
            setValue(person[newValue])
          }
    }

    useEffect(()=>{
        getUser();
    },[]);
    // console.log("first", person?.image)
  return (
    <main>
        <div className='block bcg-black'>
            <div className='block'>
                <div className='container' style={{marginTop:'100px'}}>
                <img src={(person && person.image) || defaultImage} alt='random' className='user-img'/>
                <p className='user-title'>my {title} is</p>
                <p className='user-value'>{value}</p>
                <div className='value-list'>
                    <button className='icon' data-label="name" onMouseOver={handleValue}>
                        <FaUser/>
                    </button>
                    <button className='icon' data-label="email" onMouseOver={handleValue}>
                        <FaEnvelopeOpen/>
                    </button>
                    <button className='icon' data-label="age" onMouseOver={handleValue}>
                        <FaCalendarTimes/>
                    </button>
                    <button className='icon' data-label="street" onMouseOver={handleValue}>
                        <FaMap/>
                    </button>
                    <button className='icon' data-label="phone" onMouseOver={handleValue}>
                        <FaPhone/>
                    </button>
                    <button className='icon' data-label="password" onMouseOver={handleValue}>
                        <FaLock/>
                    </button>
                </div>
                <button className='btn' type='button'>
                    {loading ? 'loading...' : 'Random Data'}
                </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default IndexRandom