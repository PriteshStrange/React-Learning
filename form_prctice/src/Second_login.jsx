import React,{useState} from "react";


function Second_login() {
    
    const [latest,setlatest] = useState("")
    const [fullName,setFullData] = useState({
        email:"",
        password:"",
        Fname:"", 
        phno:""
    })
    const submitData =()=>{
      setlatest(fullName)
    }
    const inputEvent = (event)=>{

        const {name,value} = event.target

        setFullData((previous)=>{
            return{
              ...previous,
              [name]:value
            }
        })
    }
    const getAllData = (event) =>{
        event.preventDefault()
    }
    
    
    return (
      <>
      <form onSubmit={getAllData} >

      <div>
        
        <input type="email" placeholder="Enter Your Email" onChange={inputEvent} name="email" />
        <br></br><br></br>
        <input type="password" placeholder="Enter Your Password" onChange={inputEvent} name="password" />
        <br></br><br></br>
        <input type="text" placeholder="Enter Your Name" onChange={inputEvent} name="Fname" />
        <br></br><br></br>
        <input type="Number" placeholder="Enter Your Number" onChange={inputEvent} name="phno" />
        <br></br><br></br>
        <button type="submit" onClick={submitData}>Submit</button>

        <h1>Hello YourEmail :-- {latest.email} </h1>
        <h1>Your Password:-- {latest.password}</h1> 
        <h1>Your First Name:-- {latest.Fname} </h1>
        <h1>Your Phone No:-- {latest.phno} </h1>
      </div>
      </form>
      </>
    );
  }
  // controlled and uncontroled componet
  export default Second_login;
  