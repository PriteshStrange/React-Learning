import React, { useEffect, useState } from 'react'

const getLocalstorage = () =>{
    let storage = localStorage.getItem('Users');
    if(storage){
        return JSON.parse(localStorage.getItem('Users'))
    }else{
        return []
    }
}

const FirstForm = () => {
    const [input,setInput] = useState({fname:'',email:'',phno:''});
    const [data,setData] = useState(getLocalstorage());
    const [editId,setEditId] = useState(null);
    const [editing,setEditing] = useState(false);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input){
            alert("All Fields are required");
        }else if (input && editing){
            setData(data.map((val)=>{
                if(val.id === editId){
                    let {fname,email,phno} = input;
                    return {...input,fname,email,phno}
                }
                return val;
            }));
            setEditId(null);
            setInput({fname:'',email:'',phno:''});
            setEditing(false);
        }else{
            const newItem = {...input,id:new Date().getTime().toString()}
            setData([...data,newItem]);
            setInput({fname:'',email:'',phno:''})
        }
    }

    const removeItem = (Id) =>{
        const updatedData = data.filter((item) => item.id !== Id);
        setData(updatedData);
    }

    const updateItem = (Id) =>{
        const findItem = data.find((item)=> item.id === Id);
        const {fname,email,phno} = findItem;
        setEditId(Id);
        setInput({fname,email,phno});
        setEditing(true)
    }
    useEffect(()=>{
        localStorage.setItem('Users',JSON.stringify(data));
    },[data])
  return (
      <main style={{textAlign:"center"}}>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>Name </label>
            <input type="text" id='fname' value={input.fname} name="fname" onChange={handleChange}/><br></br><br></br>
            <label htmlFor='email'>Email </label>
            <input type="email" id='email' value={input.email} name="email" onChange={handleChange}/><br></br><br></br>
            <label htmlFor='phno'>Phno </label>
            <input type="number" id='phno' value={input.phno} name="phno" onChange={handleChange}/><br></br><br></br>
            <button type='submit'>{editing ? 'Edit' : 'Add'}</button>
        </form>
        <br></br>
        <tbody>
            <table border="2">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phno</th>
                    <th colSpan="2">OPeration</th>
                </tr>
                {
                    data.map((val)=>{
                        const {id,fname,email,phno} = val;
                        return (
                            <tr key={id}>
                                <td>{fname}</td>
                                <td>{email}</td>
                                <td>{phno}</td>
                                <td><button onClick={() => updateItem(id)}>Update</button></td>
                                <td><button onClick={() => removeItem(id)}>Remove</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </tbody>
    </main>
  )
}

export default FirstForm