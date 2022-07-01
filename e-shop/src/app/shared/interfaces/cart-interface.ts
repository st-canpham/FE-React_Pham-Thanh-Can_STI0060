export interface ICartItem {
  id: number;
  quantity: number;
}

export interface ICartList {
  [key: string | number]: ICartItem;
};
