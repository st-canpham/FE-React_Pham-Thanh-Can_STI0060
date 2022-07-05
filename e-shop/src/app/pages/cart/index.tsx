import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartEmpty from './components/CartEmpty';
import CartList from './components/CartList';

const Cart: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart)
  return (
    <main>
      <section className="cart">
        <div className="container">
          {cart.length === 0 ? <CartEmpty /> : <CartList />}
        </div>
      </section>
    </main>
  )
}

export default Cart;
