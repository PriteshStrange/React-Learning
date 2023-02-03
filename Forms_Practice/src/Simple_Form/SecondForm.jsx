import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";

const getLocalData = () =>{
    const getData = localStorage.getItem('users');
    if(getData){
        return JSON.parse(localStorage.getItem('users'))
    }else{
        return [];
    }
}

const SecondForm = () => {
    const [input,setInput] = useState({fname:'',email:'',password:'',phno:'',category:''});
    const [data,setData] = useState(getLocalData());
    const [editId,seteditId] = useState(null);
    const [editing,setEditing] = useState(false);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
    }
    const handelSubmit = (e) =>{
        e.preventDefault();
        if(!input){
            alert("All Fields are required");
        }else if(input && editing) {
            setData(data.map((val)=>{
                if(val.id === editId){
                    const {fname,email,password,phno,category,id} = input;
                    return {...input,fname,email,password,phno,category,id}
                }
                return val;
            }))
            setInput({fname:'',email:'',password:'',phno:'',category:''});
            setEditing(false);
        }else{
            const newData = {...input,id:new Date().getTime().toString()};
            setData([...data,newData]);
            setInput({fname:'',email:'',password:'',phno:'',category:''})
        }
    }
    const removeItem = (Id) =>{
        const updateData = data.filter((val)=> val.id !== Id);
        setData(updateData);
    }
    const editItem = (Id) =>{
        const findData = data.find((val)=> val.id === Id);
        const {category,email,fname,password,phno} = findData;
        seteditId(Id);
        setInput({fname,email,password,phno,category});
        setEditing(true)
    }

    useEffect(()=>{
        localStorage.setItem('users',JSON.stringify(data));
    },[data])
  return (
    <main>
     <Form handleChange={handleChange} handelSubmit={handelSubmit} input={input} editing={editing}/>
     <Table removeItem={removeItem} editItem={editItem} data={data}/>
    </main>
  );
};

export default SecondForm;
