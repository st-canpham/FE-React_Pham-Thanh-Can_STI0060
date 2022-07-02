import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Category from './components/Categories';
import Selected from './components/Selected';
import Benefit from './components/Benefit';
import Today from './components/Today';
import Subcribe from './components/Subcribe';
import keyList from '../../shared/constants/keyList';
import { setStorage, getStorage } from '../../shared/helper/data';
import IProduct from '../../shared/interfaces/product-interface';

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(getStorage(keyList.productList));
  }, [])
  return (
    <main>
      <Banner />
      <Category />
      <Selected productData={productList}/>
      <Benefit />
      <Today />
      <Subcribe />
    </main>
  )
}

export default Home;
