import { createContext, useContext, useEffect, useState } from 'react';
import UseFetch from './UseFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=51531bb2`
const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [query,setQuery] = useState('batman');
    const {loading,error,data:movie} = UseFetch(`&s=${query}`)
    return <AppContext.Provider value={{loading,error,movie,query,setQuery}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export  {AppContext,AppProvider}
