import { combineReducers } from 'redux'
import cartReducer from '../pages/cart/cart.reducers';
import productReducer from '../pages/home/product.reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer
});

export default rootReducer;
