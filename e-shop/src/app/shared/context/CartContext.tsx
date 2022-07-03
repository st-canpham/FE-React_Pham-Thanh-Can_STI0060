import {useState, createContext, useEffect} from 'react'; 
import ICartItem from '../interfaces/cart-interface';
import {getStorage} from '../helper/data';
import keyList from '../constants/keyList';

interface ICartContext {
  quantityCart: number;
  updateQuantityCart: (value: number) => void;
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>
};

const CartContext = createContext<ICartContext>(
  {
    quantityCart: 0,
    updateQuantityCart: () => {},
    cart: [],
    setCart: () => {}
  }
);

type Props = {
  children: JSX.Element
};

const CartProvider: React.FC<Props> = ({children}) => {
  const [quantityCart, setQuantityCart] = useState(0);
  const [cart, setCart] = useState<ICartItem[]>([]);
  useEffect(() => {
    const cartData: ICartItem[] = getStorage(keyList.cartList) || [];
    const total = cartData.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setQuantityCart(total);
    setCart(cartData);
  }, []);
  const updateQuantityCart = (value: number) => {
    setQuantityCart(quantityCart + value);
  };

  const value: ICartContext = {
    quantityCart,
    updateQuantityCart,
    cart,
    setCart
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};

export {CartProvider, CartContext};
