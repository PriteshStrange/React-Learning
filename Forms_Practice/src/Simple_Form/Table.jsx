import React from 'react'

const Table = ({data,removeItem,editItem}) => {
  return (
    <div><table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Phnoe</th>
        <th scope="col">Category</th>
        <th scope="col" colSpan="2">Opaertion</th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((val)=>{
                const {fname,email,password,phno,category,id} = val;
                return (
                    <tr key={id}>
                    <th scope="row">1</th>
                    <td>{fname}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{phno}</td>
                    <td>{category}</td>
                    <td><button onClick={() => removeItem(id)}>Delete</button></td>
                    <td><button onClick={() => editItem(id)}>Edit</button></td>
                    </tr>
                )
            })
        }
        
    </tbody>
</table></div>
  )
}

export default Table