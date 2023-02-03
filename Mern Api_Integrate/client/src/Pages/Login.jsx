import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [input,setInput] = useState({email:'',password:''});
    const navigate = useNavigate();

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input,[name]:value})
  }
  const {email,password} = input

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:3100/user/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,password
      })
    });
    const data = await response.json();
    if(data.status === "Ok"){
      localStorage.setItem('token',data.message);
      navigate("/");
    }else{
      alert('Please Enter valid credntials')
    }
    console.log("🚀 ~ file: App.js:25 ~ handleSubmit ~ data", data)

  }
  return (
    <div className="App">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}> 
      
      <label htmlFor='email'>Email </label>
      <input type="email" value={email} onChange={handleChange} name="email" id="email"/><br></br><br></br>
      <label htmlFor='password'>Password </label>
      <input type="password" value={password} onChange={handleChange} name="password" id="password"/><br></br><br></br>
      <button type='submit'>Add</button>
    </form>
  </div>
  )
}

export default Login