const { Record } = require('immutable');
export const PICKUP = "pickup", DELIVERY =  "delivery"
const InitialState = Record({
  products: [],
  addToCart: [],
  deliveryMode: PICKUP,
  addToCartLength: 0,
  addressId:  '',
});

export default InitialState;
