import React from 'react'
import { useState } from 'react';
import Alert from './Alert';
import List from './List';
import { useEffect } from 'react';

const getLocalData = () =>{
    let data = localStorage.getItem('list');
    if(data){
       return JSON.parse(localStorage.getItem('list'))
    }else{
        return []
    }
}

const GroceryIndex = () => {
    const [input,setInput] = useState('');
    const [list,setList] = useState(getLocalData());
    const [isediting,setIsEditing] = useState(false);
    const [editId,setEditId] = useState(null)
    const [alert,setAlert] = useState({show:false,msg:'',type:''});

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!input){
            showAlert(true,'please enter value','danger')
        }else if(input && isediting){
            setList(list.map((item)=>{
                if(item.id === editId){
                    return {...input,title:input}
                }
                return item
            }))
            setInput('');
            setEditId(null);
            setIsEditing(false);
            showAlert(true,"value Changed",'success');
        }else{
            const newItem = {id:new Date().getTime().toString(),title:input};
            setList([...list,newItem]);
            setInput('')
        }
    }

    const removeItem = (Id) =>{
        showAlert(true,'Data Deleted','danger')
        const updatedData = list.filter((ele)=>{
            console.log(ele.id);
            return ele.id !== Id
        });
        setList(updatedData)
    }

    const editItem = (Id) =>{
        const specItem = list.find((val)=> val.id === Id);
        setIsEditing(true);
        setEditId(Id);
        setInput(specItem.title)
    }

    const showAlert = (show,msg,type)=>{
        setAlert({show,msg,type});
    } 

    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
                <h3>Grocery</h3>
                <div className='form-control'>
                    <input type="text" className='grocery' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Value'/>
                    <button type='submit' className='submit-btn'>
                        {isediting ? 'Edit' : 'Add'}
                    </button>
                </div>
            </form>
            {list.length > 0 &&
            <div className='grocery-container'>
                <List items={list} editItem={editItem} removeItem={removeItem}/>
                <button onClick={() => setList([])} className='clear-btn'>Remove All</button>
            </div>
            }
        </section>
    ) 
}

export default GroceryIndex


// const [input,setInput] = useState('');
//     const [data,setData] = useState([]);

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         const newData = {grocery:input,id: new Date().getTime().toString()}
//         setData([...data,newData]);
//         setInput('')
//     }

//     const removeItem = (Id) =>{
//         console.log(Id);
//         const updateddata = data.filter((ele)=>{
//             return ele.id !== Id
//         });
//         setData(updateddata)
//     }
//     const removeAll = () =>{
//         setData([])
//     }
//   return (
//     <article>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='grocery'></label>
//             <input type="text" name='grocery' value={input} onChange={(e) => setInput(e.target.value)}/>
//             <button type="submit">Add</button>
//         </form>
//         <button onClick={removeAll}>Remove All</button>
//         {
//             data.map((val)=>{
//                 return(
//                     <div>
//                         <h4>{val.grocery}</h4>
//                         <button onClick={() => removeItem(val.id)}>Remove</button>
//                     </div>
//                 )
//             })
//         }
//     </article>
//   )
// }