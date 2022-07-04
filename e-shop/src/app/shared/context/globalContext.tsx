import { useContext } from 'react';
import { CartContext } from './CartContext';

export const useCartContext = () => {
  const {cart, setCart} = useContext(CartContext);
  return {cart, setCart};
};
