import {useState, createContext, useEffect} from 'react'; 
import ICartItem from '../interfaces/cart-interface';
import {getStorage} from '../helper/data';
import keyList from '../constants/keyList';

interface ICartContext {
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>
};

const CartContext = createContext<ICartContext>(
  {
    cart: [],
    setCart: () => {}
  }
);

type Props = {
  children: JSX.Element
};

const CartProvider: React.FC<Props> = ({children}) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  useEffect(() => {
    const cartData: ICartItem[] = getStorage(keyList.cartList) || [];
    setCart(cartData);
  }, []);

  const value: ICartContext = {
    cart,
    setCart
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};

export {CartProvider, CartContext};
