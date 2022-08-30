const { SET_PRODUCTS, SET_ADD_TO_CART , SET_CART_ITEM_DECREMENT, SET_CART_ITEM_INCREMENT} = require('./types').default;

export function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}

export function setAddToCart(payload) {
  return {
    type: SET_ADD_TO_CART,
    payload,
  };
}
export function setCartItemDecrement(payload) {
  return {
    type: SET_CART_ITEM_DECREMENT,
    payload,
  };
}

export function setCartItemIncrement(payload) {
  return {
    type: SET_CART_ITEM_INCREMENT,
    payload,
  };
}