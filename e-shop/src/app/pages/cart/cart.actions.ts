import * as TYPES from '../../shared/constants/types';
import ICartItem from '../../shared/interfaces/cart-interface';

export const setCart = (data: ICartItem[]) => {
  return {
    type: TYPES.SET_CART,
    payload: data
  }
};

export const addCart = (data: ICartItem) => {
  return {
    type: TYPES.ADD_CART,
    payload: data
  }
};

export const updateCart = (id: number, message: string) => {
  return {
    type: TYPES.UPDATE_CART,
    payload: {id, message}
  }
};

export const removeCart = (id: number) => {
  return {
    type: TYPES.REMOVE_CART,
    payload: id
  }
};
