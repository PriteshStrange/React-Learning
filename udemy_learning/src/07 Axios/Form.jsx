import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const url = `https://course-api.com/axios-tutorial-post`

const Form = () => {
    const [fname,setName] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const resp = await axios.post(url,{name:fname,email:email});
            console.log(resp.data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>Name</label>
            <input type="text" name='fname' onChange={(e) => setName(e.target.value)} value={fname} /><br></br>
            <label htmlFor='email'>Email</label>
            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} /><br></br>
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}

export default Form