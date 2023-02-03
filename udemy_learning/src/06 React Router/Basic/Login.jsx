import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
    const [fname,setName] = useState('');
    const [email,setEmail] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!fname || !email) return ;
        setUser({name:fname,email:email});
        navigate('/dashbord')
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
        <h5>Login</h5>
        <label htmlFor='fname'>Name</label>
        <input type="text" id="fname" value={fname} onChange={(e) => setName(e.target.value)}/><br></br>
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
        <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default Login