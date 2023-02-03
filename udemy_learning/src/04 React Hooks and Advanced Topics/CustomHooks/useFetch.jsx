import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [products,setProduct] = useState([]);

    const getProducts = async () =>{
        const response = await fetch(url);
        const products = await response.json();
        setProduct(products);
        setLoading(false)
    }

    useEffect(()=>{
        getProducts();
    },[url]);
  return {
    loading,products
  }
}

export default useFetch