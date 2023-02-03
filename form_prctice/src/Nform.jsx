import React,{useState} from "react";


function Nform() {
    const [name,setName] = useState("");
    const [fullName,setFullName] = useState("")
  
    const inputEvent = (event)=>{
        setName(event.target.value)
    }
    const getFullName = (event) =>{
        event.preventDefault()
      setFullName(name)
    }
  
    return (
      <>
      <form onSubmit={getFullName}>

      <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </div>
      </form>
      </>
    );
  }
  
  export default Nform;
  