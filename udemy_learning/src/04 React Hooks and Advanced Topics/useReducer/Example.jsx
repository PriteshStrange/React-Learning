import React,{useReducer, useState} from 'react'
// import Sdata from '../../Birth-day Reminder/Data';
import Model from './Model';

const  reducer = (state,action)=>{
    
    if(action.type === "addItems"){
        const newitem = [...state.input,action.payload];
        return {
            ...state,
            input:newitem,
            isModelOpen:true,
            modelContent:"Data added Succesfully"
        }
    }
    
    if(action.type === "empty"){
        return {
            ...state,
            isModelOpen:true,
            modelContent:"Please Enter some value"
        }
    }
    if(action.type === "close"){
        return { ...state,isModelOpen:false}
    }

    if(action.type === "remove"){
        console.log(state.input);
        const newPeople = state.input.filter((val)=>val.id !== action.payload)
        return { ...state,input:newPeople}
    }

    return state
}
const defaultState ={
    input:[],
    isModelOpen:false,
    modelContent:'example'
}
const Example = () => {
    const [name,setName] = useState('')
    const [state,dispatch] = useReducer(reducer,defaultState)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(name){
            const newItem = {id:new Date().getTime().toString(),name}
            dispatch({type:"addItems",payload:newItem})
            setName('')
        }else{
            dispatch({type:"empty"})
        }
    }
    const closeModel = () =>{
        dispatch({type:"close"})
    }
  return (
    <>
    {state.isModelOpen && <Model modelContent={state.modelContent} closeModel={closeModel}/>}
    <form onSubmit={handleSubmit}>
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <button type='submit'>Add</button>
        </div>
    </form>
    {
        state.input.map((val)=>{
            const {name,id} = val;
            return (
                <div key={id}>
                    <br></br>
                    <h4>{name}</h4>
                    <button onClick={(()=>dispatch({type:'remove',payload:id}))}>Remove</button>
                </div>
            )
        })
    }
    </>
  )
}

export default Example