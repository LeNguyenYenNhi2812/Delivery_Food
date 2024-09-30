import React, { useContext } from 'react'
import './placeOrder.css'
import { StoreContext } from '../../context/StoreContext'
const placeOrder = () => {
  const {getCartTotal}=useContext(StoreContext);
  return (
    
    <form action="" className="order-form">
      <div className="form-title">
        <h1>Fill in your information.</h1>
      </div>
      <div className="form-left">
      <input type="text" placeholder='NAME' />
      <input type="text" placeholder='PHONE' />
      <input type="text" placeholder='ADDRESS' />
      <input type="text" placeholder='EMAIL' />
      <input type="text" placeholder='NOTE' />  
      
      </div>
      <div className="form-right">
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
        <br></br>
          <button onClick={()=>navigate('/placeorder')}>Payment</button>
          </div>
      </div>
      </div>
    </form>
  )
}

export default placeOrder
