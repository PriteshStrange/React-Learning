import React,{useState} from 'react'

const Third = () => {
    const [input,setInput] = useState({fname:'',email:'',phno:''});
    const [data,setData] = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.fname && input.email && input.phno){
            const newData = {...input,id:new Date().getTime().toString()}
            setData([...data,newData]);
            setInput({fname:'',email:'',phno:''});
        }else{
            alert("All Fields are required")
        }
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" name='fname' value={input.fname} onChange={handleChange} id='name'/><br></br>
            <label htmlFor='email'>Email</label>
            <input type="email" name='email' value={input.email} id='email' onChange={handleChange}/><br></br>
            <label htmlFor='phno'>Phno</label>
            <input type="number" name='phno' value={input.phno} onChange={handleChange} id='phno'/><br></br>
            <button type="submit">Add</button>
        </form>
    </section>
  )
}

export default Third