import { createContext, useContext, useReducer } from 'react';
import Data from '../../Data';
import reducer from './Reducer'
import { useEffect } from 'react';

const AppContext = createContext();
const url = `https://course-api.com/react-useReducer-cart-project`;

const intialState = {
    loading:false,
    cart:Data,
    total:0,
    amount:0,
}

const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,intialState)

    const clearCart = () =>{
        dispatch({type:'Clear_Cart'})
    }

    const remove = (id) =>{
        dispatch({type:'Remove',payload:id})
    }

    const increase = (id) =>{
        dispatch({type:'Increse',payload:id})
    }

    const decrese = (id) =>{
        dispatch({type:'Decrese',payload:id})
    }

    const fetchData = async() =>{
        dispatch({type:"Loading"});
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({type:'DisplayItem',payload:cart})
    }

    const toggleAmount = (id,type) =>{
        dispatch({type:'ToggleAmount',payload:{id,type}})
    }

    useEffect(()=>{
       fetchData() 
    },[])

    useEffect(()=>{
        dispatch({type:'GetTotal'})
    },[state.cart]);

    return (
        <AppContext.Provider 
        value={{...state,clearCart,remove,increase,decrese,toggleAmount}}>
            {children}
     </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}