import keyList from '../constants/keyList';
import { setStorage, getStorage } from '../helper/data';
import ICartItem from '../interfaces/cart-interface';
import { calcDiscountPrice, convertToFixed } from '../common';

interface Product {
  thumbnail: string,
  price: number,
  name: string,
  discount: number,
  id: number
};

const Product: React.FC<Product> = ({thumbnail, price, name, discount, id}) => {
  const discountPrice = convertToFixed(calcDiscountPrice(price, discount), 2);
  const addToCart = (productId: number) => {
    const cartList = getStorage(keyList.cartList) || [];
    const cartItem: ICartItem = cartList.find((item: ICartItem) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    }
    else {
      const value = {
        id,
        price: (+discountPrice || price),
        quantity: 1
      }
      cartList.push(value);
    }
    setStorage(keyList.cartList, cartList);
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={thumbnail} alt={name} />
      </div>
      {discount > 0 && <span className="badge badge-primary badge-top-left">{`${discount * 100}%`}</span>}
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <div className="product-price">
          {discount > 0 && <p className="price-discount">{discountPrice}</p>}
          <p className="price-current">{price}</p>
        </div>
      </div>
      <button 
        onClick={() => addToCart(id)}
        className="btn btn-primary product-btn"
      >Add to cart
      </button>
    </div>  
  )
};

export default Product;
