import * as TYPES from '../../shared/constants/types';
import ICartItem from '../../shared/interfaces/cart-interface';
import { storageKeys } from '../../shared/constants/storage-keys';
import { setStorage, getStorage } from '../../shared/helper/data';

interface initState {
  cart: ICartItem[];
};

interface interfaceAction {
  type: string;
  payload: any;
};

const initState: initState = {
  cart: getStorage(storageKeys.cartList) || [],
};

const cartReducer = (state = initState, action: interfaceAction) => {
  switch (action.type) {
    case TYPES.SET_CART: {
      return {
        ...state,
        cart: [...action.payload]
      }
    }

    case TYPES.ADD_CART: return {
      ...state,
      cart: [...state.cart, action.payload]
    }

    case TYPES.UPDATE_CART: {
      const cartNew = [...state.cart];
      const index = cartNew.findIndex(cartItem => cartItem.id === action.payload.id);
      if (action.payload.message === 'inscrease') {
        cartNew[index].quantity += 1;
      }
      if (action.payload.message === 'descrease') {
        cartNew[index].quantity -= 1;
      }
      if (cartNew[index].quantity <= 0) {
        cartNew.splice(index, 1);
      }
      setStorage(storageKeys.cartList, cartNew);
      return {
        ...state,
        cart: [...cartNew]
      }
    }
    
    case TYPES.REMOVE_CART: {
      const cartNew = [...state.cart];
      const index = cartNew.findIndex(cartItem => cartItem.id === action.payload);
      cartNew.splice(index, 1);
      setStorage(storageKeys.cartList, cartNew);
      return {
        ...state,
        cart: [...cartNew]
      }
    }
    default: return state;
  }
};

export default cartReducer;
