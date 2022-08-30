const { SET_PRODUCTS, SET_ADD_TO_CART } = require('./types').default;

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
