import { useState, useEffect, useRef } from 'react';
import keyList from '../../shared/constants/keyList';
import { setStorage, getStorage } from '../../shared/helper/data';
import CartEmpty from './components/CartEmpty';
import CartList from './components/CartList';
import ICartItem from '../../shared/interfaces/cart-interface';

const Cart = () => {
  const [cartList, setCartList] = useState<ICartItem[]>([]);
  useEffect(() => {
    const cartData: ICartItem[] = getStorage(keyList.cartList);
    if(cartData) {
      setCartList(cartData);
    }
  }, []);
  return (
    <main>
      <section className="cart">
        <div className="container">
          {cartList.length === 0 && <CartEmpty />}
          {cartList.length > 0 && <CartList cartList={cartList} setCartList={setCartList}/>}
        </div>
      </section>
    </main>
  )
}

export default Cart;