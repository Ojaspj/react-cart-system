import React, {useContext} from 'react'
import { PRODUCT } from '../../product'
import {ShopContext} from '../../context/shop-context'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="">
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
          {PRODUCT.map((product) => {
            if(cartItems[product.id] !== 0){
              return <CartItem  data={product}/>
            }

          })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
        <p>Sub Total : ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shoppping</button>
      </div> ):(
        <h1>Your cart is empty.</h1>
      )

      }
    </div>
  )
}

export default Cart