import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.store';
import CartItem from './CartItem';
import ICartItem from '../../../shared/interfaces/cart-interface';
import { convertToFixed } from '../../../shared/common';
import Button from '../../../shared/components/partials/Button';

const CartList: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const total = cart.reduce((total, item: ICartItem) => {
    return total + item.price*item.quantity;
  }, 0);

  const renderCart = () => {
    return (
      cart.map((item, index) => (
        <li className="cart-item" key={item.id}>
          <CartItem {...item} index={index}/>
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
        <Button className="btn btn-primary">PAY</Button>
      </div>
    </div>
  )
};

export default CartList;
