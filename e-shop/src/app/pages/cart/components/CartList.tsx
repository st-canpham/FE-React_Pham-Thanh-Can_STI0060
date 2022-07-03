import React, {useContext} from 'react';
import {CartContext} from '../../../shared/context/CartContext';
import CartItem from './CartItem';
import ICartItem from '../../../shared/interfaces/cart-interface';
import {convertToFixed} from '../../../shared/common';

const CartList: React.FC = () => {
  const cartContext = useContext(CartContext);
  const {cart} = cartContext;

  const total = cart.reduce((total, item: ICartItem) => {
    return total + item.price*item.quantity;
  }, 0);

  const renderCart = () => {
    return (
      cart.map(item => (
        <li className="cart-item" key={item.id}>
          <CartItem 
            id={item.id} 
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))
    )
  };

  return (
    <div className="row cart-not-empty">
      <ul className="cart-list col-7">
        {renderCart()}
      </ul>
      <div className="cart-total col-5">
        <p>TOTAL: <span>{convertToFixed(total, 2)}</span></p>
        <button className="btn btn-primary">PAY</button>
      </div>
    </div>
  )
};

export default CartList;
