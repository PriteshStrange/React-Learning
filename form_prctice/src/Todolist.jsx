import React,{useState} from "react";
import Lists from "./list";

const Todolist = () =>{

    const [list,setList] = useState("");
    const [items,setItems] = useState([])    

    const setValue = (event) =>{
        setList(event.target.value)
    }
    
    const submitData= ()=>{
        setItems((oldItems) =>{
            return [...oldItems,list]
        });
        setList("")
    }
    
    const deleteItems =(id) =>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }

    return(
        <>
            <h1>To Do List</h1>

            <br></br>
            <input type="text" name="list" value={list} onChange={setValue}  placeholder="Enter Your List"/>
            <br></br><br></br>
            <button type="submit" onClick={submitData}>+</button>

            <ol>
                {
                    items.map((itemVal,index) => {
                       return <Lists key={index} id={index} text={itemVal} onSelect={deleteItems}/>
                    })
                }
                
            </ol>
        </>
    )
}

export default Todolist