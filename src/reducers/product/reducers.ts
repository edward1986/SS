const { SET_PRODUCTS, SET_ADD_TO_CART } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PRODUCTS: {
      state = state.set('products', action.payload);
      return state
    }
    case SET_ADD_TO_CART: {
      let addToCart = []
      addToCart.push(action.payload)
      state = state.set('addToCartLength', addToCart.length);
      state = state.set('addToCart', action.payload);
      return state
    }
    default:
      return state;
  }
}
