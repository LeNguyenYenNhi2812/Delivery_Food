import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from './../../context/StoreContext';

const cart = () => {
  const {cartItems,food_list,removeFromCart}=useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-item">
      <div className="cart-item-title big">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantities</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br/>
      <hr></hr>
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0){
          return (
            <div>
            <div className="cart-item-title cart-item-item">
              <img src={item.image} alt="" />
              <p id="title-content">{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} id="cross-sign">X</p>
            </div>
            <hr></hr>
            </div>
          )
        }
      
      })}
      </div>
    </div>
  )
}

export default cart
