import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty-img">
        <img 
          src="https://rtworkspace.com/wp-content/plugins/rtworkspace-ecommerce-wp-plugin/assets/img/empty-cart.png" 
          alt="no items in cart" 
        />
      </div>
      <Link to="/" className="btn btn-primary">SHOP NOW</Link>
    </div>
  )
};

export default CartEmpty;
