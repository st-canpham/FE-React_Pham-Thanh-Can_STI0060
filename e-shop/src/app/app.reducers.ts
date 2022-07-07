import { combineReducers } from 'redux'
import cartReducer from './pages/cart/cart.reducers';
import home from './pages/home/home.reducers';

const reducers = {
  cart: cartReducer,
  home: home
};

const appReducer = combineReducers({ ...reducers });
export default appReducer;
