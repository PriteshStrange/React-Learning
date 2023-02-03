import React from 'react'

const Table = ({state}) => {
    const updatedData = (Id) =>{

    } 
  return (
    <div>
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
                state.map((val) =>{
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

export default Table