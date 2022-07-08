import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertToFixed, getProductById } from '../../../shared/common';
import Button from '../../../shared/components/partials/Button';
import { RootState } from '../../../app.store';
import { removeCart, updateCart } from '../cart.actions';

interface Props {
  id: number;
  price: number;
  quantity: number;
  index: number;
};

const CartItem: React.FC<Props> = ({id, quantity, price, index}) => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state: RootState) => state.home);
  const productItem = getProductById(id, productList);

  const updateQuantityCart = (message: string) => {
    dispatch(updateCart(id, message));
  };

  const removeCartItem = () => {
    dispatch(removeCart(id));
  };
  
  if (productItem) {
    return (
      <>
        <div className="cart-item-left">
          <div className="cart-img">
            <img src={productItem.image} alt={productItem.name} />
          </div>
          {productItem.discount > 0 && <div className="badge badge-primary">{`${productItem.discount}%`} </div>}
          <div className="cart-info">
            <div className="cart-info-top">
              <h4 className="cart-name">{productItem.name}</h4>
              <div className="cart-price">
                {productItem.discount > 0 && <p className="price-discount">{price}</p>}
                <p className="price-current">{productItem.price}</p>
              </div>
            </div>
            <p className="cart-total-item">Total: 
              <span> {convertToFixed((price || productItem.price)*quantity, 2)}</span>
            </p>
          </div>
        </div>
        <div className="cart-option">
          <div className="quantity">
            <Button onClick={() => updateQuantityCart('descrease')}>-</Button>
            <input type="number" disabled min="0" value={quantity}/>
            <Button onClick={() => updateQuantityCart('inscrease')}>+</Button>
          </div>
          <Button className="btn remove-btn" onClick={removeCartItem}>Remove</Button>
        </div>
      </>
    )
  }
  return <></>;
};

export default CartItem;
