import ProductList from '../../../../shared/components/ProductlList';
import IProduct from '../../../../shared/interfaces/product-interface';

const Selected = (props: any) => {
  const productData: IProduct[] = props.productData;
  return (
    <section className="section-for-you page-section">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-title">Selected just for you</h3>
          <button className="btn btn-outline-secondary">SHOW MORE</button>
        </div>
        <ProductList productList={productData}/>
      </div>
    </section>
  )
};

export default Selected;
