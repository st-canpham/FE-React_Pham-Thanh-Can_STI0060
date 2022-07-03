import React, {useEffect, useState, useContext} from 'react';
import {CartContext} from '../../../shared/context/CartContext';
import ICartItem from '../../../shared/interfaces/cart-interface';
import IProduct from '../../../shared/interfaces/product-interface';
import {setStorage} from '../../../shared/helper/data';
import keyList from '../../../shared/constants/keyList';
import {convertToFixed, getProductById} from '../../../shared/common';

interface CartItem {
  id: number;
  price: number;
  quantity: number;
};

const CartItem: React.FC<CartItem> = ({id, quantity, price}) => {
  const cartContext = useContext(CartContext);
  const {updateQuantityCart, setCart} = cartContext;
  const [productItem, setProductItem] = useState<IProduct>();
  useEffect(() => {
    const item = getProductById(id);
    if(item) {
      setProductItem(item);
    } 
  }, []);

  const updateQuantityCartItem = (id: number, value: number) => {
    setCart((prevCartList: ICartItem[]) => {
      const newCartList = [...prevCartList];
      const index = newCartList.findIndex(item => item.id === id);
      newCartList[index].quantity += value;
      if(newCartList[index].quantity === 0) {
        removeCartItem(id);
      }
      setStorage(keyList.cartList, newCartList);
      updateQuantityCart(value);
      return newCartList;
    })
  };

  const removeCartItem = (id: number) => {
    setCart((prevCartList: ICartItem[]) => {
      const newCartList = [...prevCartList];
      const index = newCartList.findIndex(item => item.id === id);
      newCartList.splice(index, 1);
      setStorage(keyList.cartList, newCartList);
      updateQuantityCart(-quantity);
      return newCartList;
    })
    updateQuantityCart(-quantity);
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
            <button onClick={() => {updateQuantityCartItem(id, -1)}}>-</button>
            <input type="number" disabled min="0" value={quantity}/>
            <button onClick={() => {updateQuantityCartItem(id, 1)}}>+</button>
          </div>
          <button className="btn remove-btn" onClick={() => {removeCartItem(id)}}>Remove</button>
        </div>
      </>
    )
  }
  return <></>;
};

export default CartItem;
