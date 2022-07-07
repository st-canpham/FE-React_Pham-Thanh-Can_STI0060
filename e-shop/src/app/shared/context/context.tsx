import { useState, createContext, useEffect } from 'react'; 
import ICartItem from '../interfaces/cart-interface';
import { getStorage } from '../helper/data';
import { storageKeys } from '../constants/storage-keys';

interface IContext {
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>
};

const Context = createContext<IContext>(
  {
    cart: [],
    setCart: () => {},
    user: '',
    setUser: () => {}
  }
);

type Props = {
  children: JSX.Element
};

const ContextProvider: React.FC<Props> = ({children}) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [user, setUser] = useState('');
  useEffect(() => {
    const cartData: ICartItem[] = getStorage(storageKeys.cartList) || [];
    setCart(cartData);
  }, []);

  const value: IContext = {
    cart,
    setCart,
    user,
    setUser
  };

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
};

export {ContextProvider, Context};
