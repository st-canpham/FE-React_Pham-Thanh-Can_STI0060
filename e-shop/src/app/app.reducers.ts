import { combineReducers } from 'redux'
import cartReducer from './pages/cart/cart.reducers';
import homeReducer from './pages/home/home.reducers';
import registerReducer from './pages/register/register.reducers';

const reducers = {
  cart: cartReducer,
  home: homeReducer,
  register: registerReducer
};

const appReducer = combineReducers({ ...reducers });
export default appReducer;
