import React,{useState} from "react";


function Loginform() {
    const [email,setName] = useState("");
    const [newEmail,setNewEmail] = useState("")
    const [password,setPassword] = useState("");
    const [newPassword,setNewPassword] = useState("")
  
    const getAllData = (event) =>{
        event.preventDefault()
        setNewEmail(email)
        setNewPassword(password)
    }
    const inputEvent = (event)=>{
        setName(event.target.value)
    }
    const inputEvent2 = (event)=>{
        setPassword(event.target.value)
    }
    
    return (
      <>
      <form onSubmit={getAllData} >

      <div>
        <h1>Hello {newEmail} {newPassword}</h1>
        <input type="email" placeholder="Enter Your Email" onChange={inputEvent} value={email}/>
        <br></br><br></br>
        <input type="password" placeholder="Enter Your Password" onChange={inputEvent2} value={password}/>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </div>
      </form>
      </>
    );
  }
  // controlled and uncontroled componet
  export default Loginform;
  