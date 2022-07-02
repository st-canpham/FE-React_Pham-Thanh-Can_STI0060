import { useEffect, useState } from 'react';
import ICartItem from '../../../shared/interfaces/cart-interface';
import IProduct from '../../../shared/interfaces/product-interface';
import { getStorage, setStorage } from '../../../shared/helper/data';
import keyList from '../../../shared/constants/keyList';
import { convertToFixed, getProductById } from '../../../shared/common';

interface CartItem {
  id: number;
  price: number;
  quantity: number;
  setCartList: any;
};

const CartItem: React.FC<CartItem> = ({id, quantity, price, setCartList}) => {
  const [cartItem, setCartItem] = useState<IProduct>();
  useEffect(() => {
    const item = getProductById(id);
    if(item) {
      setCartItem(item);
    } 
  }, []);

  const updateCartItem = (id: number, value: number) => {
    setCartList((prevCartList: ICartItem[]) => {
      const nextCartList = [...prevCartList];
      const index = nextCartList.findIndex(item => item.id === id);
      nextCartList[index].quantity += value;
      if(nextCartList[index].quantity === 0) {
        removeCartItem(id);
      }
      setStorage(keyList.cartList, nextCartList);
      return nextCartList;
    })
  };

  const removeCartItem = (id: number) => {
    setCartList((prevCartList: ICartItem[]) => {
      const nextCartList = [...prevCartList];
      const index = nextCartList.findIndex(item => item.id === id);
      nextCartList.splice(index, 1);
      setStorage(keyList.cartList, nextCartList);
      return nextCartList;
    })
  };
  
  if(cartItem) {
    return (
      <>
        <div className="cart-item-left">
        <div className="cart-img">
          <img src={cartItem.thumbnail} alt={cartItem.name} />
        </div>
        {cartItem.discount > 0 && <div className="badge badge-primary">{`${cartItem.discount*100}%`} </div>}
        <div className="cart-info">
          <div className="cart-info-top">
            <h4 className="cart-name">{cartItem.name}</h4>
            <div className="cart-price">
              {cartItem.discount > 0 && <p className="price-discount">{price}</p>}
              <p className="price-current">{cartItem.price}</p>
            </div>
          </div>
          <p className="cart-total-item">Total: 
            <span> {convertToFixed((price || cartItem.price)*quantity, 2)}</span>
          </p>
        </div>
      </div>
      <div className="cart-option">
        <div className="quantity">
          <button onClick={() => {updateCartItem(id, -1)}}>-</button>
          <input type="number" disabled min="0" value={quantity}/>
          <button onClick={() => {updateCartItem(id, 1)}}>+</button>
        </div>
        <button className="btn remove-btn" onClick={() => {removeCartItem(id)}}>Remove</button>
      </div>
      </>
    )
  }
  return null;
};

export default CartItem;
