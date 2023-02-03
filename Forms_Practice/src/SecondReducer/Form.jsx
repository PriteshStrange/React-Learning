import React from 'react'
import { useState, useReducer } from 'react';
import Table from './Table';


const Form = () => {
    const reducer = (state,action) =>{
        if(action.type === "Add_Item"){
            const add = [...state.data,action.payload];
            return {
                ...state,
                data:add
            }
        }
        if(action.type === "Edit_data"){
            
        }
        return state;        
    }
    const intialState ={
        data:[]
    }
    const [state,dispatch] = useReducer(reducer,intialState);
    const [input,setInput] = useState({fname:'',email:'',phno:'',radio:''});
    const [editId,setEditId] = useState(false);
    const [editing,setEditing] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input){
           
        }else if( input && editing){
            const findDTA = state.data.map((val)=> val.id === editId);
            dispatch({type:"Edit_data",payload:findDTA});
        }else{
            const newItem = {...input,id:new Date().getTime().toString()}
            dispatch({type:"Add_Item",payload:newItem});
            setInput({fname:'',email:'',phno:'',radio:''})
        }
        
    }
    const updatedData = (Id) =>{
        const data = state.data.find((val) => val.id === Id);
        const {fname,email,phno,radio} = data;
        setEditId(Id);
        setInput({fname,email,phno,radio});
        setEditing(true);
    }
    console.log(state.data);
  return (
    <div>
        <br></br>
        <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
            <label htmlFor='fname'>Name </label>
            <input type="text" id="fname" value={input.fname} name="fname" onChange={handleChange}/><br></br><br></br>
            <label htmlFor='email'>Email </label>
            <input type="email" id="email" value={input.email} name="email" onChange={handleChange}/><br></br><br></br>
            <label htmlFor='phno'>Phone </label>
            <input type="number" id="phno" value={input.phno} name="phno" onChange={handleChange} /><br></br><br></br>
            <div>
                <label htmlFor='val'>Value </label>
                <input style={{marginLeft:"15px"}} type="radio" name="radio" onChange={handleChange} value="True"/> True
                <input style={{marginLeft:"15px"}} type="radio" name="radio" onChange={handleChange} value="False"/> False
            </div>
            <button type='submit'>Add</button>
        </form>
        
   
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phnoe</th>
            <th scope="col">Value</th>
            <th colSpan="2">Operation</th>
            </tr>
        </thead>
        <tbody>
            {
                state.data.map((val) =>{
                   const  {fname,email,phno,radio,id} = val;
                   return (
                    <tr>
                    <td>{fname}</td>
                    <td>{email}</td>
                    <td>{phno}</td>
                    <td>{radio}</td>
                    <td><button onClick={() => updatedData(id)}>Edit</button></td>
                    <td><button>Delete</button></td>
                    </tr>   
                   )
                })
            }
            
        </tbody>
        </table>
   
    </div>
  )
}

export default Form