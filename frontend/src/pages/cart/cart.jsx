import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from './../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const cart = () => {
  const {cartItems,food_list,removeFromCart,getCartTotal}=useContext(StoreContext);
  const navigate = useNavigate();
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
      <div className="cart-bottom">
        <div className="cart-total">
          <p id="total-title">Total</p>
          <br></br>
          <p>Subtotal of your order:</p>
          <p id="total-num">${getCartTotal()}</p>
          <br></br>
          <p>Delivery fee:</p>
          <p id="total-num">${getCartTotal()> 0? 2 :0}</p>
          <br></br>  <hr></hr>
          <p>Total:</p>
          <p id="total-num">${getCartTotal()>0? getCartTotal()+2 : 0}</p>
        <br></br>
          <button onClick={()=>navigate('/placeorder')}>Checkout</button>
          </div>
          <div className="cart-discount">
            <p>If you have any promo code, enter it here.</p>
            <br></br>
            <div className="cart-discount-input">
              <input type="text" placeholder='enter your promo code' />
                <button>Apply</button>
            </div>
          </div>
        

      </div>
    </div>
  )
}

export default cart
