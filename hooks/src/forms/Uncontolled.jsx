import React, { useRef,useState } from 'react'

const Uncontolled = () => {
    const [show,setShow] = useState(false)
    const Name = useRef(null)
    const userData = (e) =>{
        e.preventDefault();
        const userinfo= Name.current.value
        userinfo === "" ? alert("This Fields are required") : setShow(true)
        
    }
  return (
    <div>
        <form onSubmit={userData}>
            <div>
                <h2>Unhandlle controller Example</h2>
                <br></br>
                <label htmlFor='Name'>Enter Your Name</label>
                <input type="text" id="Name" ref={Name}/>
            </div><br></br>
            <button>Submit</button>
            <h3>{show ? `Uncontolled example name is ${Name.current.value}` : ""} </h3>
            <br></br>
        </form>
    </div>
  )
}

export default Uncontolled