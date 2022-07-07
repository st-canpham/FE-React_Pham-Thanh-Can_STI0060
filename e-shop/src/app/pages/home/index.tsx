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
  const { isLoading, productList, categories } = useSelector((state: RootState) => state.home);

  return isLoading ? (<LoadingSpinner />) : (
    <main>
      <Banner />
      <Category />
      <SectionProducts 
        productData={productList} 
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
