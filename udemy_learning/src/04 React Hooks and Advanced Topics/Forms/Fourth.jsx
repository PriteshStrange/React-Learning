import React from 'react'
import { useState } from 'react';

const Fourth = () => {
    const [input,setInput] = useState({fname:'',email:'',phno:''});
    const [data,setData] = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newData = {...input,id:new Date().getTime().toString()}
        setData([...data,newData]);
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>Name :- </label>
            <input type="text" id='fname' placeholder="Enter Name" value={input.fname} onChange={handleChange} name="fname"/><br></br>
            <label htmlFor='email'>Email:- </label>
            <input type="email" id='email' placeholder="Enter Email" value={input.email} onChange={handleChange} name="email"/><br></br>
            <label htmlFor='phno'>Phno</label>
            <input type="number" id='phno' placeholder="Enter Phno" value={input.phno} onChange={handleChange} name="phno"/><br></br>
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}

export default Fourth