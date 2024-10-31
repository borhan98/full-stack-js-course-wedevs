import React, { useContext } from 'react';
import { CartContext } from '../components/Context/CartProvider';
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className='cart-area'>
      <div className='cart-container'>
        <div className='cart-items-wrapper'>
          <ul className='cart-item-list'>
            {
              !cart.length ? <div className='empty-data'>You didn't add to cart anything yet..!!</div> : cart.map(item => <li key={item.id} className='cart-item'>
                <figure><img src={item?.product?.image} alt='' /></figure>
                <div className='cart-info'>
                  <h4 className='title'>{item?.product?.title}</h4>
                  <p className='price'>{item?.product?.price}</p>
                </div>
                <button onClick={() => removeFromCart(item?.product?.id)} className='remove-btn'>Remove</button>
              </li>)
            }
          </ul>
        </div>
        <div className='purchase-table'>
          {/* pricing and purchase table */}
        </div>
      </div>
    </div>
  );
};

export default Cart;