import React, {useContext} from 'react';
import {CartContext} from '../../../shared/context/CartContext';
import {setStorage} from '../../../shared/helper/data';
import keyList from '../../../shared/constants/keyList';
import {convertToFixed, getProductById} from '../../../shared/common';

interface Props {
  id: number;
  price: number;
  quantity: number;
};

const CartItem: React.FC<Props> = ({id, quantity, price}) => {
  const cartContext = useContext(CartContext);
  const {setQuantityCart, setCart} = cartContext;
  const productItem = getProductById(id);

  const updateCartItem = (id: number, value: number) => {
    setCart(cartPrev => {
      const cartNew = [...cartPrev];
      const index = cartNew.findIndex(cartItem => cartItem.id === id);
      cartNew[index].quantity += value;
      if(cartNew[index].quantity <= 0) {
        removeCartItem(id, 0);
      }
      setStorage(keyList.cartList, cartNew);
      setQuantityCart(quantityPrev => quantityPrev + value);
      return cartNew;
    })
  };

  const removeCartItem = (id: number, quantityCurrent: number) => {
    setCart(cartPrev => {
      const cartNew = [...cartPrev];
      const index = cartNew.findIndex(cartItem => cartItem.id === id);
      cartNew.splice(index, 1);
      setStorage(keyList.cartList, cartNew);
      setQuantityCart(quantityPrev => quantityPrev - quantityCurrent);
      return cartNew;
    })
  };
  
  if(productItem) {
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
            <button onClick={() => {updateCartItem(id, -1)}}>-</button>
            <input type="number" disabled min="0" value={quantity}/>
            <button onClick={() => {updateCartItem(id, +1)}}>+</button>
          </div>
          <button className="btn remove-btn" onClick={() => removeCartItem(id, quantity)} >Remove</button>
        </div>
      </>
    )
  }
  return <></>;
};

export default CartItem;
