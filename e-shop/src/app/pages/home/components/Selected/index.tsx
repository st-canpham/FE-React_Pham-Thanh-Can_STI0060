import productData from '../../../../shared/constants/product-data';
import ProductList from '../../../../shared/components/ProductlList';

const Selected = () => {
  return (
    <section className="section-for-you page-section">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-title">Selected just for you</h3>
          <button className="btn btn-outline-secondary">SHOW MORE</button>
        </div>
        <ProductList data={productData}/>
      </div>
    </section>
  )
};

export default Selected;
