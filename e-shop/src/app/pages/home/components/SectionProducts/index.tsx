import ProductList from '../../../../shared/components/partials/ProductlList';
import IProduct from '../../../../shared/interfaces/product-interface';

interface Props {
  productData: IProduct[];
  title: string;
  action?: string;
};

const SectionProducts: React.FC<Props> = ({productData, title, action}) => {
  const productList: IProduct[] = productData;
  return (
    <section className="section-for-you page-section">
      <div className="container">
        <div className="section-heading">
          <h3 className={`section-title ${!action && 'text-center'}`}>{title}</h3>
          {action && <button className="btn btn-outline-secondary">{action}</button>}
        </div>
        <ProductList productList={productList}/>
      </div>
    </section>
  )
};

export default SectionProducts;
