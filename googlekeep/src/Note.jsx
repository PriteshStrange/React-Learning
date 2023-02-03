import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Notes =(props)=> {
    const deleteNote = () =>{
        console.log("hello worlddddddddddddddddddd",props.id)
        props.deleteItem(props.id)
    }
  return (
   <>
   <p>Title :-- {props.title}</p>
   <p>This is content :-- {props.content}</p>
   <DeleteOutlineIcon onClick={deleteNote}/>
   </>
  );
}

export default Notes;