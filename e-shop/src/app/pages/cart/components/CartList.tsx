import React from 'react';
import CartItem from './CartItem';
import ICartItem from '../../../shared/interfaces/cart-interface';
import {convertToFixed} from '../../../shared/common';
interface CartList {
  cartList: ICartItem[];
  setCartList: any;
};

const CartList: React.FC<CartList> = ({cartList, setCartList}) => {
  let total = cartList.reduce((total, item: ICartItem) => {
    return total + item.price*item.quantity;
  }, 0);
  const renderCart = () => {
    return (
      cartList.map(item => (
        <li className="cart-item" key={item.id}>
          <CartItem 
            id={item.id} 
            price={item.price}
            quantity={item.quantity} 
            setCartList={setCartList}
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
