import productData from '../../../../shared/constants/product-data';
import ProductList from '../../../../shared/components/ProductlList';
import IProduct from '../../../../shared/interfaces/product-interface';

const Today = () => {
  return (
    <section className="section-products page-section">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-title text-center">Products in today</h3>
        </div>
        <ProductList productList={productData}/>
      </div>
    </section>
  )
}

export default Today;
