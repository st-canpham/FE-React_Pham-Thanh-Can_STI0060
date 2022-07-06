import IProduct from '../interfaces/product-interface';

export const calcDiscountPrice = (initialPrice: number, discount: number) => {
  return initialPrice - initialPrice * (discount/100);
};

export const convertToFixed = (value: number, numberFixed: number) => {
  return value.toFixed(numberFixed);
};

export const getProductById = (id: number, productList: IProduct[]) => {
  const productItem = productList.find(item => item.id === id);
  return productItem;
};
