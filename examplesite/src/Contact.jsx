import React, { useState } from "react";

const Contact = () => {
  const [input,setInput] = useState({
      name:'',
      email:'',
      phno:'',
      message:''
  });

  const inputEvent = (e) =>{
    const {name,value} = e.target;
    setInput((preval)=>{
      return {
        ...preval,[name]:value,
      }
    })
  }

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`User name is ${input.name} & User phone no is ${input.phno} & User Email is ${input.email} & User Message is ${input.message}`);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="FormControlInput1">Name</label>
                <input
                  type="text"
                  value={input.name}
                  onChange={inputEvent}
                  name="name"
                  className="form-control"
                  id="FormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  value={input.email}
                  onChange={inputEvent}
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Phone No.</label>
                <input
                  type="number"
                  value={input.phno}
                  onChange={inputEvent}
                  name="phno"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Message</label>
                <input
                  type="text"
                  value={input.message}
                  onChange={inputEvent}
                  name="message"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Message"
                />
              </div><br></br>
              
              <div className="form-group">
               <button type="submit">Submit</button>
                 
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
