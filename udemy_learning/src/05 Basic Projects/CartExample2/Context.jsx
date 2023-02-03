import { createContext, useContext, useReducer } from 'react';
import Reducer from './Reducer'
import Data from '../../Data';
import { useEffect } from 'react';

const AppContext = createContext();

const intialState = {
    loading:false,
    cart:Data,
    total:0,
    amount:0
}

const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(Reducer,intialState);

    const clearCart = () =>{
        dispatch({type:"Clear_All"})
    }

    const clearItem = (Id) =>{
        dispatch({type:"Clear_Item",payload:Id})
    }

    const Increase = (Id) =>{
       console.log("hello")
        dispatch({type:"Increase",payload:Id})
    }
    
    const Decrease = (Id) =>{
        dispatch({type:"Decrease",payload:Id})
    }

    useEffect(()=>{
        dispatch({type:"Get_Total"})
    },[state.cart])
    return (
        <AppContext.Provider 
        value={{...state,clearCart,clearItem,Increase,Decrease}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
   return useContext(AppContext);
}

export {AppContext,AppProvider}


