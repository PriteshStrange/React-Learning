import React,{useState} from "react"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [input,setInput] = useState({fname:'',email:'',password:''});
    const navigate = useNavigate();

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input,[name]:value})
  }
  const {fname,email,password} = input

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:3100/user/api/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        fname,email,password
      })
    });
    const data = await response.json();
    if(data){
        navigate("/")
    }

  }
  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor='fname'>Name </label>
        <input type="text" value={fname} onChange={handleChange} name="fname"/><br></br><br></br>
        <label htmlFor='email'>Email </label>
        <input type="email" value={email} onChange={handleChange} name="email" id="email"/><br></br><br></br>
        <label htmlFor='password'>Password </label>
        <input type="password" value={password} onChange={handleChange} name="password" id="password"/><br></br><br></br>
        <button type='submit'>Add</button>
      </form>
    </div>
    
  )
}

export default Register