import React, {useEffect, useState} from 'react';
import Banner from './components/banner';
import Category from './components/categories';
import SectionProducts from './components/section-products';
import Benefit from './components/benefit';
import Subcribe from './components/subcribe';
import keyList from '../../shared/constants/keyList';
import {getStorage} from '../../shared/helper/data';
import IProduct from '../../shared/interfaces/product-interface';

const Home: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  useEffect(() => {
    setProductList(getStorage(keyList.productList) || []);
  }, [])
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
