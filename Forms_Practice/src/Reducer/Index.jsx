import React, { useReducer, useState } from 'react'

const Index = () => {
    const [input,setInput] = useState({fname:'',email:'',password:'',category:'',exampleRadios:''});
    const [editiId,setEditId] = useState(null);
    const [isEditing,setEditing] = useState(false);

    const reducer = (state,action) =>{
        if(action.type === "addItem"){
            const newItem = [...state.data,action.payload];
            return {
                ...state,
                data:newItem
            }
        }
        if(action.type === "Remove"){
            const updatedData = state.data.filter((val)=> val.id !== action.payload)
            return {
                ...state,
                data:updatedData
            }
        }
        if(action.type === "editItem"){
            const updatedData = state.data.map((val)=> {
                if(val.id === action.payload){
                    const {fname,email,password,category,exampleRadios} = input;
                    return [...state.data,fname,email,password,category,exampleRadios];
                }
                console.log("value",val);
                return val;
            });
            return {
                ...state,
                data:updatedData
            }
        }
        return state;
    }
    const intailState = {
        data:[]
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    const [state,dispatch] = useReducer(reducer,intailState);

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!input){

        }else if(input && isEditing){
            dispatch({type:"editItem",payload:editiId});
            setEditing(false);
            setInput({fname:'',email:'',password:'',category:'',exampleRadios:''});
            setEditId(null)
        }else{
            const newItem = {...input,id: new Date().getTime().toString()};
            dispatch({type:"addItem",payload:newItem});
            setInput({fname:'',email:'',password:'',category:'',exampleRadios:''})
        }
    }

    const handleRemove = (Id) =>{
        dispatch({type:"Remove",payload:Id});
    }
    const handleUpdate = (Id) =>{
        const findData = state.data.find((val)=> val.id === Id);
        const {fname,email,password,category,exampleRadios} = findData
        setEditing(true);
        setInput({fname,email,password,category,exampleRadios});
        setEditId(Id)
    }
  return (
    <main>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input type="text" value={input.fname} className="form-control" name='fname' onChange={handleChange} id="exampleInputName" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={input.email} className="form-control" name='email' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={input.password} className="form-control" name='password' onChange={handleChange} id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <select className="form-control" value={input.category} onChange={handleChange} name='category'>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>Java</option>
                </select>
            </div>
            <div className="form-check">
                <input className="form-check-input" checked={input.exampleRadios === "True"}  value="True" type="radio" onChange={handleChange} name="exampleRadios" id="exampleRadios1" />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    True
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" checked={input.exampleRadios === "False"} value="False" type="radio" onChange={handleChange} name="exampleRadios" id="exampleRadios2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                    False
                </label>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">{isEditing ? 'Edit' : 'Submit'}</button>
        </form>

        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">category</th>
            <th scope="col">exampleRadios</th>
            <th colSpan="2">Operation</th>
            </tr>
        </thead>
        <tbody>
            {
                state.data.map((val)=>{
                    const {fname,email,password,category,exampleRadios,id} = val;
                    return (
                        <tr key={id}>
                            <th scope="row">1</th>
                            <td>{fname}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>{category}</td>
                            <td>{exampleRadios}</td>
                            <td><button onClick={() => handleUpdate(id)}>Edit</button></td>
                            <td><button onClick={() => handleRemove(id)}>Remove</button></td>
                        </tr>  
                    )
                })
            }
                     
        </tbody>
        </table>
    </main>
  )
}

export default Index