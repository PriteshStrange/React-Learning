import { createContext, useCallback, useContext, useEffect, useState } from "react";

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [loading,setLoading]= useState(true);
    const [serach,setSearch] = useState('a');
    const [coktail,setCoktail] = useState([]);

    const fetchData = useCallback( async() =>{
        setLoading(true);
        try {
            const resp = await fetch(`${url}${serach}`);
            const data = await resp.json();
            const {drinks} = data;
            if(drinks){
                const newdata = drinks.map((val)=>{
                    const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = val;
                    return {
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        info:strAlcoholic,
                        glass:strGlass
                    }
                });
                setCoktail(newdata);
            }else{
                setCoktail([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    },[serach])

    useEffect(()=>{
        fetchData();
    },[serach,fetchData])

    return (
        <AppContext.Provider value={{loading,coktail,setSearch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}  

export {AppContext,AppProvider}