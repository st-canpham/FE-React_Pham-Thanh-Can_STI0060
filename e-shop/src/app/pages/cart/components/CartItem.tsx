import React from 'react';
import { useCartContext } from '../../../shared/context/globalContext';
import { setStorage } from '../../../shared/helper/data';
import keyList from '../../../shared/constants/keyList';
import { convertToFixed, getProductById } from '../../../shared/common';
import Button from '../../../shared/components/partials/Button';

interface Props {
  id: number;
  price: number;
  quantity: number;
  index: number;
};

const CartItem: React.FC<Props> = ({id, quantity, price, index}) => {
  const {setCart} = useCartContext();
  const productItem = getProductById(id);

  const updateCartItem = (value: number) => {
    setCart(cartPrev => {
      const cartNew = [...cartPrev];
      const cartItem = cartNew[index];
      cartItem.quantity += value;
      if (cartItem.quantity <= 0) {
        removeCartItem();
      }
      setStorage(keyList.cartList, cartNew);
      return cartNew;
    })
  };

  const removeCartItem = () => {
    setCart(cartPrev => {
      const cartNew = [...cartPrev];
      cartNew.splice(index, 1);
      setStorage(keyList.cartList, cartNew);
      return cartNew;
    })
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
            <Button onClick={() => updateCartItem(-1)}>-</Button>
            <input type="number" disabled min="0" value={quantity}/>
            <Button onClick={() => updateCartItem(1)}>+</Button>
          </div>
          <Button className="btn remove-btn" onClick={removeCartItem}>Remove</Button>
        </div>
      </>
    )
  }
  return <></>;
};

export default CartItem;
