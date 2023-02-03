import React,{useState} from 'react'

const First = () => {
    const [input,setInput] = useState({fname:'',email:'',age:''});
    const [data,setData] = useState([]);
    const handleItem = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    
    const addItems = (e) =>{
        e.preventDefault();
        if(input.fname && input.email && input.age){
            const newData = {...input,id: new Date().getTime().toString()}
            setData([...data,newData]);
            setInput({fname:'',email:'',age:''})
        }
    }
  return (
    <section>
        <form onSubmit={addItems}>
            <label htmlFor='fname'>Name </label>
            <input type='text' id='fname' name='fname' value={input.fname} onChange={handleItem}/><br></br>
            <label htmlFor='email'>Email  </label>
            <input type='email' id='email' name='email' value={input.email} onChange={handleItem}/><br></br>
            <label htmlFor='age'>Age </label>
            <input type='number' id='age' name='age' value={input.age} onChange={handleItem}/><br></br>
            <button type='submit'>Add</button>
        </form>
        {
            data.map((val)=>{
                const {fname,id,email,age} = val;
                return(
                    <div key={id}>
                        <br></br>
                        <h4>{fname}</h4>
                        <h4>{email}</h4>
                        <h4>{age}</h4>
                        <hr/>
                    </div>
                )
            })
        }
    </section>
  )
}

export default First