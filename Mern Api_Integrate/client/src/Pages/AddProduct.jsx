import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const AddProduct = () => {
    const {id} = useParams();
    const [input,setInput] = useState({productName:'',Price:'',Quanity:'',Category:''});
    const [editing,setEditing] = useState(false);
    
    
    const navigate = useNavigate();
    const {productName,Price,Quanity,Category} = input;
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value})
      }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(input && editing){
            const response = await axios.put(`http://localhost:3100/product/api/editProducts/${id}`,input);
            if(response.status === 200){
                navigate("/");
            }
        }else{
            const response = await axios.post("http://localhost:3100/product/api/addProduct",input);
            if(response.status === 200){
                navigate("/");
            }    
        }
    }

    const fetchProduct = async() =>{
        const {data} = await axios.get(`http://localhost:3100/product/api/products/${id}`);
        setInput(data.Productdata);
        if(data.Productdata){
            setEditing(!editing);
        }
    } 

    useEffect(()=>{
        fetchProduct();
    },[id]);

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name </label>
        <input type="text" value={productName} onChange={handleChange} name="productName" />
        <br></br>
        <br></br>
        <label htmlFor="Price">Price </label>
        <input
          type="number"
          value={Price}
          onChange={handleChange}
          name="Price"
          id="Price"
        />
        <br></br>
        <br></br>
        <label htmlFor="Quanity">Quanity </label>
        <input
          type="text"
          value={Quanity}
          onChange={handleChange}
          name="Quanity"
          id="Quanity"
        />
        <br></br>
        <br></br>
        <select name="Category" onChange={handleChange} value={Category}>
            <option value="Electric">Electric</option>
            <option value="Furniture">Furniture</option>
            <option value="Sports">Sports</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
