import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [loading,setLoading] = useState(true);
    const [serach,setSearch] = useState('a');
    const [cocktail,setCocktail] = useState([]);
    return (
        <AppContext.Provider value={{loading,cocktail,setSearch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}



