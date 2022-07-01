import Banner from './components/Banner';
import Category from './components/Categories';
import Selected from './components/Selected';
import Benefit from './components/Benefit';
import Today from './components/Today';
import Subcribe from './components/Subcribe';

const Home = () => {
  return (
    <main>
      <Banner />
      <Category />
      <Selected />
      <Benefit />
      <Today />
      <Subcribe />
    </main>
  )
}

export default Home;
