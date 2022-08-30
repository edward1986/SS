const { Record } = require('immutable');

const InitialState = Record({
  products: [],
  addToCart: [],
  addToCartLength: 0
});

export default InitialState;
