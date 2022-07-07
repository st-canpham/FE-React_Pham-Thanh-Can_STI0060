import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Banner from './components/banner';
import Category from './components/categories';
import SectionProducts from './components/section-products';
import Benefit from './components/benefit';
import Subcribe from './components/subcribe';
import LoadingSpinner from '../../shared/components/partials/LoadingSpinner';
import { RootState } from '../../app.store';

const Home: React.FC = () => {
  const { isLoading, productList, categories, categoriesChecked } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return isLoading ? (<LoadingSpinner />) : (
    <main>
      <Banner />
      <Category />
      <SectionProducts 
        productData={productList} 
        categoriesChecked={categoriesChecked}
        title="Selected just for you"
        action="SHOW MORE"
      />
      <Benefit />
      <SectionProducts 
        productData={productList} 
        title="Products in today"
      />
      <Subcribe />
    </main>
  )
}

export default Home;
