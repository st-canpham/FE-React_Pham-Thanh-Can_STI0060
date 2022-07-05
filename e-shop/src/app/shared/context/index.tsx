import { useContext } from 'react';
import { Context } from './context';

const useGlobalContext = () => {
  return useContext(Context);
};

export default useGlobalContext;
