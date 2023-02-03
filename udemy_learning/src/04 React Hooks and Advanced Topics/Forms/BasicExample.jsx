import React,{useState} from 'react'

const BasicExample = () => {
  const [input,setInput] = useState({fname:'',email:'',phno:''});
  const [data,setData] = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }

    const submitForm = (e) =>{
      e.preventDefault();
      if(input.fname && input.email && input.phno){
        const newData = {...input,id:new Date().getTime().toString()}
        setData([...data,newData]);
        setInput({fname:'',email:'',phno:''});
      }else{
        alert("All fields are Required");
      }
    }
  return (
    <>
        <form>
            <label htmlFor='name'>Name:- </label>
            <input type="text" value={input.fname} name='fname' onChange={handleChange} /><br></br>
            <label htmlFor='Email'>Email:- </label>
            <input type="email" value={input.email} name='email' onChange={handleChange} /><br></br>
            <label htmlFor='phno' >Phno:- </label>
            <input type="number" value={input.phno} name='phno' onChange={handleChange} /><br></br>
            <button onClick={submitForm}>Add</button>
           
        </form>
        {
          data.map((val)=>{
            const {id,fname,email,phno} = val;
            return (
              
              <div key={id}>
                 <hr/>
                <br></br>
                <h4>{fname}</h4>
                <h4>{email}</h4>
                <h4>{phno}</h4>
              </div>
            )
          })
        }
    </>
  )
}

export default BasicExample