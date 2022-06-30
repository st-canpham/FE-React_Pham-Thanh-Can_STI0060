import Product from './Product';

const ProductList = ({data}: any) => {
  return (
    <ul className="products-list row js-products-list">
      {data.map((product: any)=> (
        <li key={product.id} className="product-item col-3 col-sm-6">
          <Product 
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        </li>
      ))}
    </ul>
  )
};

export default ProductList;