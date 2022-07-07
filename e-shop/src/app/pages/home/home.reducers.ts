import * as TYPES from '../../shared/constants/types';
import IAction from '../../shared/interfaces/action-interface';
import IProduct from '../../shared/interfaces/product-interface';
import ICategory from '../../shared/interfaces/category-interface';
import { stat } from 'fs';

interface IInitState {
  productList: IProduct[];
  categories: ICategory[];
  isLoading: boolean;
  error: string;
  categoriesChecked: string[];
};

const initState: IInitState = {
  productList: [],
  categories: [],
  isLoading: false,
  error: "",
  categoriesChecked: []
};

const homeReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS: 
      return {
        ...state, 
        isLoading: true,
      }

    case TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isLoading: false
      }
      
    case TYPES.GET_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    
    case TYPES.GET_CATEGORIES: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case TYPES.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isloading: false,
        categories: action.payload
      }
    }

    case TYPES.GET_CATEGORIES: {
      return {
        ...state,
        isloading: false,
        error: action.payload
      }
    }
    
    case TYPES.FILTER_PRODUCT: 
      return {
        ...state,
        categoriesChecked: action.payload
      }

    default: return state;
  }
};

export default homeReducer;
