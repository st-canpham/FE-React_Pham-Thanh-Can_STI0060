import React, {useContext} from 'react';
import {CartContext} from '../../shared/context/CartContext';
import CartEmpty from './components/CartEmpty';
import CartList from './components/CartList';

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  const {cart} = cartContext;
  return (
    <main>
      <section className="cart">
        <div className="container">
          {cart.length === 0 && <CartEmpty />}
          {cart.length > 0 && <CartList />}
        </div>
      </section>
    </main>
  )
}

export default Cart;
