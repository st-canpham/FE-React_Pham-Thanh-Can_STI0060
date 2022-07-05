import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ICartItem from '../../interfaces/cart-interface';
import { calcDiscountPrice, convertToFixed } from '../../common';
import Button from '../../components/partials/Button';
import { addCart, updateInscreaseCart } from '../../../pages/cart/cart.actions';
import { RootState } from '../../../store';
 
interface Props {
  thumbnail: string,
  price: number,
  name: string,
  discount: number,
  id: number
};

const Product: React.FC<Props> = ({thumbnail, price, name, discount, id}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  const discountPrice = convertToFixed(calcDiscountPrice(price, discount), 2);
  const addToCart = () => {
    const cartNew = [...cart];
    const cartItem = cartNew.find((item: ICartItem) => item.id === id);
    if (cartItem) {
      dispatch(updateInscreaseCart(id));
    }
    else {
      const value = {
        id,
        price: (+discountPrice || price),
        quantity: 1
      }
      dispatch(addCart(value));
    }
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
        onClick={addToCart}
        className="btn btn-primary product-btn"
      >Add to cart
      </Button>
    </div>  
  )
};

export default Product;
