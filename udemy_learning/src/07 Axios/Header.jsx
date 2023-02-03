import React,{useState} from 'react';
import axios from 'axios'
const url = `https://icanhazdadjoke.com/`;

const Header = () => {
    const [data,setData] = useState('random');

    const fetchData = async() =>{
        try{
            const {data} = await axios(url,{
                headers:{
                    Accept:'application/json'
                }
            });
            setData(data.joke)
        }catch(err){
            console.log("Error === >",err.message);
        }
    }
  return (
      <section>
          <button onClick={fetchData}>Random</button>
          <p>{data}</p>
      </section>
  )
}

export default Header