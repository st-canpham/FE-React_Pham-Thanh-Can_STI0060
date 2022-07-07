import * as TYPES from '../../shared/constants/types';

export const getProducts = () => {
  return {
    type: TYPES.GET_PRODUCTS
  }
};

export const getProductsSuccess = (data: any) => {
  return {
    type: TYPES.GET_PRODUCTS_SUCCESS,
    payload: data
  }
};

export const getProductsFailed = (data: any) => {
  return {
    type: TYPES.GET_PRODUCTS_FAILED,
    payload: data
  }
};

export const getCategories = () => {
  return {
    type: TYPES.GET_CATEGORIES
  }
};

export const getCategoriesSuccess = (data: any) => {
  return {
    type: TYPES.GET_CATEGORIES_SUCCESS,
    payload: data
  }
};

export const getCategoriesFailed = (data: any) => {
  return {
    type: TYPES.GET_CATEGORIES_FAILED,
    payload: data
  }
};

export const filterProduct = (categories: string[]) => {
  return {
    type: TYPES.FILTER_PRODUCT,
    payload: categories
  }
};
