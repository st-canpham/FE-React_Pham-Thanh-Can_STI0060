import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { convertToFixed, getProductById } from '../../../shared/common';
import Button from '../../../shared/components/partials/Button';
import { RootState } from '../../../store';
import { updateInscreaseCart, updateDescreaseCart, removeCart } from '../cart.actions';

interface Props {
  id: number;
  price: number;
  quantity: number;
  index: number;
};

const CartItem: React.FC<Props> = ({id, quantity, price, index}) => {
  const dispatch = useDispatch();
  const productItem = getProductById(id);
  const { cart } = useSelector((state: RootState) => state.cart)
  const updateQuantityCartItem = (action: string) => {
    switch(action) {
      case 'inscrease': dispatch(updateInscreaseCart(id)); break;
      case 'descrease': dispatch(updateDescreaseCart(id)); break;
      default: throw new Error('Invalid action');
    }
  };

  const removeCartItem = () => {
    dispatch(removeCart(id));
  };
  
  if (productItem) {
    return (
      <>
        <div className="cart-item-left">
          <div className="cart-img">
            <img src={productItem.thumbnail} alt={productItem.name} />
          </div>
          {productItem.discount > 0 && <div className="badge badge-primary">{`${productItem.discount*100}%`} </div>}
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
            <Button onClick={() => updateQuantityCartItem('descrease')}>-</Button>
            <input type="number" disabled min="0" value={quantity}/>
            <Button onClick={() => updateQuantityCartItem('inscrease')}>+</Button>
          </div>
          <Button className="btn remove-btn" onClick={removeCartItem}>Remove</Button>
        </div>
      </>
    )
  }
  return <></>;
};

export default CartItem;
