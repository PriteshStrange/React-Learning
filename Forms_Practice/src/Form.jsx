import React, { useState } from 'react';

const Form = () => {
    const [input,setInput] = useState({fname:'',email:'',phno:''});
    const [Data,setData] = useState([]);
    const [editing,setEditing] = useState(false);
    const [editId,setEditId] = useState(null);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input){
            alert("Please Enter Value")
        }
        else if(input && editing){
            setData( Data.map((item)=>{
                if(item.id === editId){
                    let {fname,email,phno} = input;
                    return {...input,fname,email,phno}
                }
                return item;
            }));
            setEditId(null);
            setInput({fname:'',email:'',phno:''});
            setEditing(false)
        }else{
            const newItem = {...input,id:new Date().getTime().toString()}
            setData([...Data,newItem]);
            setInput({fname:'',email:'',phno:''})
        }
    }
    const deleteData = (Id) =>{
        console.log(Id);
        const updatedData = Data.filter((val)=> {
            return val.id !== Id
        } )
        setData(updatedData);
    }
    const updateData = (Id) =>{
        const findItem = Data.find((val) => val.id === Id);
        const {fname,email,phno,id} = findItem;
        setEditId(id)
        setInput({fname,email,phno});
        setEditing(true)
    }
  return (
    <main>
        <form style={{textAlign:"center"}} onSubmit={handleSubmit}>
        <br></br><br></br>
            <label htmlFor='fname'>Name </label>
            <input type="text" id='fname' value={input.fname} name='fname' required onChange={handleChange} placeholder='Enter Name'/><br></br><br></br>
            <label htmlFor='email'>Email </label>
            <input type="email" id='email' value={input.email} name='email' required onChange={handleChange} placeholder='Enter Email'/><br></br><br></br>
            <label htmlFor='phno'>Phnoe No </label>
            <input type="number" id='phno' value={input.phno} name='phno' required onChange={handleChange} placeholder='Enter Phno'/><br></br><br></br>
            <button type='submit'>{editing ? 'Edit' : 'Add'}</button>
        </form>
        <table border="2">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th colSpan="2">Opeartion</th>
             </tr>
        
        {
            Data.map((val)=>{
                const {fname,email,id,phno} = val;
                return (
                   <tr key={id}>
                       <td>{fname}</td>
                       <td>{email}</td>
                       <td>{phno}</td>
                       <td><button onClick={() => updateData(id)}>Update</button></td>
                       <td><button onClick={() => deleteData(id)}>Delete</button></td>
                   </tr>
                )
            })
        }
        </table>
    </main>
  )
}

export default Form
