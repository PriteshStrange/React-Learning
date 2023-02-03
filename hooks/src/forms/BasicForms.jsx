import React,{ useState } from 'react'

function BasicForms() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [data,setData] = useState([])

    const submitForm = (e) =>{
        e.preventDefault();
        if(email && password){

            const allEntry = {id:new Date().getTime().toString(),email:email,password:password};
           setData([...data,allEntry]);
           console.log("exacyly data",data);
    
           setEmail("");
           setPassword("")
        }else{
            alert("All Fields are Required")
        }
    }
  return (
      <>
      <h2>Basic login form example</h2>
      <form action="" onSubmit={submitForm}>
        <div>
            <br></br><label htmlFor='email'>Email</label>
            <input type="email" name="email" id='email' value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete='off'/><br></br>
            <label htmlFor='password'>Password</label> 
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} id='password' autoComplete='off'/><br></br>
            <button type="submit">Login</button>
        </div>
      </form>
      <div>
          {
             data.map((curElem)=>{
                 const {id,email,password} = curElem
                 console.log("======",id);
                 return(
                     <>
                     <div key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                     </div>
                     </>
                 )
             })
          }
      </div>
      </>
  )
}

export default BasicForms