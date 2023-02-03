import React,{useState} from 'react'

const Second = () => {
    const [input,setInput]=useState({fname:'',email:'',age:''});
    const [data,setData] = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.fname && input.email && input.age){
            const newData = {...input,id:new Date().getTime().toString()};
            setData([...data,newData]);
            setInput({fname:'',email:'',age:''});
        }
    }
    console.log(input);
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" name='fname' value={input.fname} placeholder='Enter Name' onChange={handleChange}/><br></br>
            <label htmlFor='email'>Email</label>
            <input type="email" name='email' value={input.email} placeholder='Enter Email' onChange={handleChange}/><br></br>
            <label htmlFor='age'>Age</label>
            <input type="number" name='age' value={input.age} placeholder='Enter age' onChange={handleChange}/><br></br>
            <button type='submit'>Add</button>
        </form>
        {
            data.map((val)=>{
                const {fname,email,age} = val;
                return(
                    <section>
                        <h4>{fname}</h4>
                        <h4>{email}</h4>
                        <h4>{age}</h4>
                        <hr/>
                    </section>
                )
            })
        }
    </section>
  )
}

export default Second