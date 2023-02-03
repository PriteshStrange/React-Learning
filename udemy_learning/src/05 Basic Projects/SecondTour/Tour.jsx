import React,{useState} from 'react';
import Loading from './Loading';
import { useEffect, createContext } from 'react';
import Tours from './Tours';
const url = "https://course-api.com/react-tours-project";
const contextExample = createContext();

const Tour = () => {
    const [loading,setLoading] = useState(true);
    const [tour,setTour] = useState([]);

    const fetchTours = async() =>{
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setTour(data)
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const RemoveTour = (id) =>{
        console.log("hello",id)
        const updatedTour = tour.filter((val)=>val.id !== id);
        setTour(updatedTour);
    }
    useEffect(()=>{
        fetchTours()
    },[])

    if(loading){
        return(
            <main>
                <Loading/>
            </main>
        )
    }
    if(tour.length === 0){
        return (
            <main>
                <div className='title'>No Data left....</div><br></br>
                <button className='btn' onClick={fetchTours}>Restart</button>
            </main>
        )
    }
  return (
    <div>
        <contextExample.Provider value={{RemoveTour}}>
        <Tours tour={tour}/> 
        </contextExample.Provider>
    </div>
  )
}

export default Tour
export {contextExample}
