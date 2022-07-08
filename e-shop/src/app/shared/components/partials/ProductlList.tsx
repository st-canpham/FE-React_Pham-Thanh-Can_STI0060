import React from 'react';
import Product from './Product';
import IProduct from '../../interfaces/product-interface';

interface IProductList {
  productList: IProduct[];
  checked: string[]
};

const ProductList: React.FC<IProductList> = ({productList, checked}) => {
  let productsChecked: IProduct[] = [];
  if (checked?.length !== 0) {
    productsChecked = productList.filter(item => {
      if(checked?.includes(item.category)) {
        return item;
      }
    })
  }
  const productsCurrent = productsChecked.length ? productsChecked : productList;
  return (
    <ul className="products-list row js-products-list">
      {productsCurrent.map((product: IProduct)=> (
        <li key={product.id} className="product-item col-3 col-sm-6">
          <Product 
            {...product}
          />
        </li>
      ))}
    </ul>
  )
};

export default ProductList;
