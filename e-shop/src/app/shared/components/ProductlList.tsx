import Product from './Product';
import IProduct from '../interfaces/product-interface';

interface IProductList {
  productList: IProduct[];
};

const ProductList = ({productList}: IProductList) => {
  return (
    <ul className="products-list row js-products-list">
      {productList.map((product: IProduct)=> (
        <li key={product.id} className="product-item col-3 col-sm-6">
          <Product 
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            discount={product.discount}
            id={product.id}
          />
        </li>
      ))}
    </ul>
  )
};

export default ProductList;
