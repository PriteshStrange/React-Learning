const Reducer = (state,action) =>{
    if(action.type === "Clear_All"){
        return {...state,cart:[]};
    }

    if(action.type === "Clear_Item"){
        
        return {...state,cart:state.cart.filter((cartItem)=> cartItem.id !== action.payload)}
    }

    if(action.type === "Increase" ){
       
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                return {...cartItem,amount:cartItem.amount + 1}
            }
            return cartItem
        });
        return {...state,cart:tempCart}
    }

    if(action.type === "Decrease" ){
       
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                return {...cartItem,amount:cartItem.amount - 1}
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return {...state,cart:tempCart}
    }

    if(action.type === "Get_Total" ){
       let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
           const {price,amount} = cartItem;
           const itemTotal = price * amount
           cartTotal.total += itemTotal 
           cartTotal.amount += amount;
           return cartTotal
       },{
           total:0,
           amount:0
       });
        total = parseFloat(total.toFixed(2))
       return {...state,total,amount}
    }
    return state
}
export default Reducer