import React, { useEffect, useState } from 'react'

const getLocalData = () =>{
  const lists = localStorage.getItem("List");
  if(lists){
    return JSON.parse(lists)
  }else{
    return []
  }
}

const Todo = () => {
  const [inputdata,setInputData] =useState('');
  const [data,setData] = useState(getLocalData());
  const [editData,setEditData] = useState('');
  const [toogleButton,setToogleButton] = useState(false);

  const checkData = () =>{
      if(!inputdata){
        alert("Field is Required");
      }else if(inputdata && toogleButton){
        const updateData = data.map((curEle)=>{
          if(curEle.id === editData){
            return {...curEle,name:inputdata}
          }
          return curEle
        });
        setData(updateData);
        setInputData("")
        setEditData(null);
        setToogleButton(false)
      }
      else{
        const newData = {
          id:new Date().getTime().toString(),
          name:inputdata
        }
        setData([...data,newData]);
        setInputData('');
      }
  }
  const removeAll = () =>{
    setData([])
  }
  
  const removeItem = (Id) =>{
    console.log("Actuall Id",Id);
    const Remove = data.filter((curEle)=>{ 
      console.log("Remove Id",curEle.id);
      return curEle.id !== Id
    });
    setData(Remove)
  }

  const editItem = (Id) =>{
    const editData = data.find((curEle)=>{ 
      return curEle.id === Id
    });
    setInputData(editData.name)
    setEditData(Id);
    setToogleButton(true)
  }


  useEffect(()=>{
    localStorage.setItem("List",JSON.stringify(data)) 
  },[data])

  return (
    <>
    <br></br>
    <div style={{textAlign:"center"}}>
      <input type="text" value={inputdata} onChange={((e)=> setInputData(e.target.value))}/>
      <br></br><br></br>
      {
        toogleButton ? <button onClick={checkData}> Edit </button> : <button onClick={checkData}>Add </button>
      }
      <button style={{marginLeft:"20px"}} onClick={removeAll}> Remove All</button>
    </div>
    <hr/>
    <br></br>
    <div style={{textAlign:"center"}}>
      {
        data.map((val,index)=>{
          return (
            <p key={index}>The value is {val.name}
            <button style={{marginLeft:"20px"}} onClick={()=>editItem(val.id)}> Edit</button> 
            <button style={{marginLeft:"10px"}} onClick={()=>removeItem(val.id)}>remove</button></p>
            )
        })
      }
      
    </div>
    </>
  )
}

export default Todo