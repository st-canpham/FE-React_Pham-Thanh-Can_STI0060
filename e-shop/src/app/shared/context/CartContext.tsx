import {useState, createContext, useEffect} from 'react'; 
import ICartItem from '../interfaces/cart-interface';
import {getStorage} from '../helper/data';
import keyList from '../constants/keyList';

export interface ICartContext {
  quantityCart: number;
  updateQuantityCart: (value: number) => void;
};

const CartContext = createContext<ICartContext | null>(null);

type Props = {
  children: JSX.Element
};

const CartProvider: React.FC<Props> = ({children}) => {
  const [quantityCart, setQuantityCart] = useState(0);
  useEffect(() => {
    const cartData: ICartItem[] = getStorage(keyList.cartList);
    const total = cartData.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setQuantityCart(total);
  }, []);

  const updateQuantityCart = (value: number) => {
    setQuantityCart(quantityCart + value);
  };

  const value: ICartContext = {
    quantityCart,
    updateQuantityCart
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};

export {CartProvider, CartContext};
