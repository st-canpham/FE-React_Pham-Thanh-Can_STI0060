import React from 'react';
import Product from './Product';
import IProduct from '../../interfaces/product-interface';

interface IProductList {
  productList: IProduct[];
};

const ProductList: React.FC<IProductList> = ({productList}) => {
  return (
    <ul className="products-list row js-products-list">
      {productList.map((product: IProduct)=> (
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
