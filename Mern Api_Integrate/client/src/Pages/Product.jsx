import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import  axios from 'axios';

const Product = () => {
    const [product,setProduct] = useState([]);
        
   const response = async() =>{
       const {data} = await axios.get("http://localhost:3100/product/api/products");
       setProduct(data.Productdata)
    }

    const removeData = async(Id) =>{
        const data = await axios.delete(`http://localhost:3100/product/api/removePrdouct/${Id}`);
        response();
    }

    useEffect(() =>{
        response()
    },[]);

  return (
    <div>
      <button>
        <NavLink to="/addProduct">Add Product</NavLink>
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quanity</th>
            <th scope="col">Category</th>
            <th colspan="2" scope="col">Operation</th>

          </tr>
        </thead>
        <tbody>
          
              {
                  product.map((val) =>{
                    //   const {Category,Price,Quanity,productName,id} = val;

                      return (
                        <tr>
                            <th scope="row">1</th>
                            <td>{val?.productName}</td>
                            <td>{val?.Price}</td>
                            <td>{val?.Quanity}</td>
                            <td>{val?.Category}</td>
                            <td><NavLink to={`/edit/${val?._id}`}>Edit</NavLink></td>
                            <td><button onClick={() => removeData(val?._id)}>Delete</button></td>
                            </tr>
                      )
                  })
              }
          
        </tbody>
      </table>
    </div>
  );
};

export default Product;
