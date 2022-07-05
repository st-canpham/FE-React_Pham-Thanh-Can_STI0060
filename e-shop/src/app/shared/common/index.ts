import productList from '../../shared/constants/product-data';

export const calcDiscountPrice = (initialPrice: number, discount: number) => {
  return initialPrice - initialPrice * discount;
};

export const convertToFixed = (value: number, numberFixed: number) => {
  return value.toFixed(numberFixed);
};

export const getProductById = (id: number) => {
  const productItem = productList.find(item => item.id === id);
  return productItem;
};
