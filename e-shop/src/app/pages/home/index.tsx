import React from 'react';
import Banner from './components/banner';
import Category from './components/categories';
import SectionProducts from './components/section-products';
import Benefit from './components/benefit';
import Subcribe from './components/subcribe';
import productList from '../../shared/constants/product-data';

const Home: React.FC = () => {
  return (
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
