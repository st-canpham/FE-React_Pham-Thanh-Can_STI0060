import React from 'react';
import useGlobalContext from '../../shared/context';
import CartEmpty from './components/CartEmpty';
import CartList from './components/CartList';

const Cart: React.FC = () => {
  const {cart} = useGlobalContext ();
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
