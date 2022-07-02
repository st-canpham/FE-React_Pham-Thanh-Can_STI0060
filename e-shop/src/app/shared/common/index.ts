import { getStorage } from '../helper/data';
import keyList from '../constants/keyList';
import IProduct from '../interfaces/product-interface';

export const calcDiscountPrice = (initialPrice: number, discount: number) => {
  return initialPrice - initialPrice * discount;
};

export const convertToFixed = (value: number, numberFixed: number) => {
  return value.toFixed(numberFixed);
};

export const getProductById = (id: number) => {
  const productList: IProduct[] = getStorage(keyList.productList) || [];
  const productItem = productList.find(item => item.id === id);
  return productItem;
};
