import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets'


export const StoreContext = createContext(null);
const StoreContextProvider = (props)=>{

const [cartItems,setCartItems]=useState({});

const addToCart=(itemId) => {
    if (!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getCartTotal=()=>{
        let sum=0;
        for( const item in cartItems){
            if(cartItems[item]>0){
            let chosenItem=food_list.find((food)=>food._id===item);
            sum+=chosenItem.price*cartItems[item];
        }
    }
    return sum;
}
    const contextValue ={
   food_list,
   cartItems,
   setCartItems,
   addToCart,
   removeFromCart,
   getCartTotal
    }
        return (
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>

    )
    
    }
export default StoreContextProvider;