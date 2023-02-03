import React,{ createContext, useContext } from 'react';
import { useState } from 'react';

const AppContext = createContext();

const AppProvider = ({children})=>{
    const [isSidebar,setIsSidebar] = useState(false)
    const [isModel,setIsModel] = useState(false);

    const openSider = () =>{
        setIsSidebar(true);
    }

    const closeSider = () =>{
        setIsSidebar(false);
    }

    const openModal = () =>{
        setIsModel(true);
    }

    const closeModal = () =>{
        setIsModel(false);
    }

    return <AppContext.Provider value={{isSidebar,isModel,openModal,openSider,closeModal,closeSider}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}