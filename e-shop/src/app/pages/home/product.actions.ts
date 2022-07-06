import axios from 'axios';
import { Dispatch, AnyAction } from 'redux';
import * as TYPES from '../../shared/constants/types';

export const getProducts = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch({ type: TYPES.GET_PRODUCTS });
    const productsApi = 'https://6088e20da6f4a300174271e7.mockapi.io/products';
    const res = await axios.get(productsApi);
    dispatch({ 
      type: TYPES.GET_PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TYPES.GET_PRODUCTS_FAILED,
      payload: err
    });
  }
}
