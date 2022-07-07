import { useSelector } from 'react-redux';
import ProductList from '../../../../shared/components/partials/ProductlList';
import IProduct from '../../../../shared/interfaces/product-interface';
import Filter from '../Filter';

interface Props {
  productData: IProduct[];
  title: string;
  action?: string;
  categoriesChecked?: number[];
};

const SectionProducts: React.FC<Props> = ({productData, title, action, categoriesChecked}) => {

  const { categories } = useSelector((state: any) => state.home);

  return (
    <section className="section-for-you page-section">
      <div className="container">
        <div className="section-heading">
          <h3 className={`section-title ${!action && 'text-center'}`}>{title}</h3>
          {action && <button className="btn btn-outline-secondary">{action}</button>}
        </div>
        <Filter categories={categories}/>
        <ProductList productList={productData} categoriesChecked={categoriesChecked}/>
      </div>
    </section>
  )
};

export default SectionProducts;
