import React from 'react';
import { useCartContext } from '../../context/globalContext';
import keyList from '../../constants/keyList';
import { setStorage } from '../../helper/data';
import ICartItem from '../../interfaces/cart-interface';
import { calcDiscountPrice, convertToFixed } from '../../common';
import Button from '../../components/partials/Button';

interface Props {
  thumbnail: string,
  price: number,
  name: string,
  discount: number,
  id: number
};

const Product: React.FC<Props> = ({thumbnail, price, name, discount, id}) => {
  const {cart, setCart} = useCartContext();
  const discountPrice = convertToFixed(calcDiscountPrice(price, discount), 2);
  const addToCart = () => {
    const cartNew = [...cart];
    const cartItem = cartNew.find((item: ICartItem) => item.id === id);
    if (cartItem) {
      cartItem.quantity += 1;
    }
    else {
      const value = {
        id,
        price: (+discountPrice || price),
        quantity: 1
      }
      cartNew.push(value);
    }
    setStorage(keyList.cartList, cartNew);
    setCart(cartNew);
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
      <Button
        onClick={() => addToCart()}
        className="btn btn-primary product-btn"
      >Add to cart
      </Button>
    </div>  
  )
};

export default Product;
