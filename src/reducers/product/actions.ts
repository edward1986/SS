const { SET_PRODUCTS } = require('./types').default;

export function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}
