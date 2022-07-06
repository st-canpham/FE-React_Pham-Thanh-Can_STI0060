import * as TYPES from '../../shared/constants/types';
import IAction from '../../shared/interfaces/action-interface';
import IProduct from '../../shared/interfaces/product-interface';

interface IInitState {
  productList: IProduct[];
  isLoading: boolean;
  error: string
};

const initState: IInitState = {
  productList: [],
  isLoading: false,
  error: ""
};

const productReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS: 
      return {
        ...state, 
        isLoading: true,
      }

    case TYPES.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productList: action.payload,
        isLoading: false
      }
    }
      
    case TYPES.GET_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default: return state;
  }
};

export default productReducer;
