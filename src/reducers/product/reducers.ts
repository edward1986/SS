const { SET_PRODUCTS } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PRODUCTS: {
      state = state.set('products', action.payload);
      return state
    }
    default:
      return state;
  }
}
