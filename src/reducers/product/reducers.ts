const { SET_PRODUCTS, SET_ADD_TO_CART, SET_CART_ITEM_DECREMENT, SET_CART_ITEM_INCREMENT  } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PRODUCTS: {
      state = state.set('products', action.payload);
      return state
    }
    case SET_ADD_TO_CART: {
      let addToCart = [...state.addToCart]

      let exist = state.addToCart.findIndex((cart)=> action.payload.id == cart.id)
      if(exist > -1) {
        addToCart[0].quantity = ((+addToCart[0].quantity)  +  (+action.payload.quantity))
      }else{
        addToCart.push(action.payload)
      }

      state = state.set('addToCartLength', addToCart.length);
      state = state.set('addToCart', addToCart);
      return state
    }

    case SET_CART_ITEM_DECREMENT:{
      let addToCart = [...state.addToCart]

      let exist = state.addToCart.findIndex((cart)=> action.payload.id == cart.id)
      if(exist > -1) {
        addToCart[exist].quantity = (+addToCart[exist].quantity)  -  1
      }

      state = state.set('addToCartLength', addToCart.length);
      state = state.set('addToCart', addToCart);
      return state
    }


    case SET_CART_ITEM_INCREMENT:{
      let addToCart = [...state.addToCart]

      let exist = state.addToCart.findIndex((cart)=> action.payload.id == cart.id)
      if(exist > -1) {
        addToCart[exist].quantity = (+addToCart[exist].quantity)  +  1
      }

      state = state.set('addToCartLength', addToCart.length);
      state = state.set('addToCart', addToCart);
      return state
    }
    default:
      return state;
  }
}
