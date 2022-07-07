import { combineReducers } from 'redux'
import cartReducer from '../pages/cart/cart.reducers';
import home from '../pages/home/home.reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  home: home
});

export default rootReducer;
