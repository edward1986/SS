import {DELIVERY, PICKUP} from "./initialstate";

const {
    SET_EMPTY_CART,
    SET_PRODUCTS,
    SET_ADD_TO_CART,
    SET_CART_ITEM_DECREMENT,
    SET_CART_ITEM_INCREMENT,
    SET_CART_ITEM_DELETE,
    SET_CART_ITEM_CHECK,
    SET_CART_ITEM_DELIVERY,
    SET_CART_ITEM_PICKUP,
    SET_ADDRESS_ID
} = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
    switch (action.type) {
        case SET_PRODUCTS: {
            state = state.set('products', action.payload);
            return state
        }
        case SET_EMPTY_CART: {
            state = state.set('addToCart', []);
            state = state.set('addToCartLength', 0);
            return state
        }
        case SET_ADD_TO_CART: {
            let addToCart = [...state.addToCart]

            let exist = state.addToCart.findIndex((cart) => {
                return action.payload.id == cart.id && action.payload.dimension1Input == cart.dimension1Input && action.payload.dimension2Input == cart.dimension2Input
            })
            if (exist > -1) {
                addToCart[0].quantity = ((+addToCart[exist].quantity) + (+action.payload.quantity))
            } else {
                addToCart.push(action.payload)
            }

            state = state.set('addToCartLength', addToCart.length);
            state = state.set('addToCart', addToCart);
            return state
        }

        case SET_CART_ITEM_DECREMENT: {
            let addToCart = [...state.addToCart]

            let exist = state.addToCart.findIndex((cart) => action.payload.id == cart.id && action.payload.dimension1Input == cart.dimension1Input && action.payload.dimension2Input == cart.dimension2Input)
            if (exist > -1) {
                addToCart[exist].quantity = (+addToCart[exist].quantity) - 1
            }

            state = state.set('addToCartLength', addToCart.length);
            state = state.set('addToCart', addToCart);
            return state
        }


        case SET_CART_ITEM_INCREMENT: {
            let addToCart = [...state.addToCart]

            let exist = state.addToCart.findIndex((cart) => action.payload.id == cart.id && action.payload.dimension1Input == cart.dimension1Input && action.payload.dimension2Input == cart.dimension2Input)
            if (exist > -1) {
                addToCart[exist].quantity = (+addToCart[exist].quantity) + 1
            }

            state = state.set('addToCartLength', addToCart.length);
            state = state.set('addToCart', addToCart);
            return state
        }
        case SET_CART_ITEM_DELETE: {
            let addToCart = [...state.addToCart]

            let exist = state?.addToCart?.findIndex((cart) => action?.payload?.id == cart.id)
            if (exist > -1) {
                addToCart.splice(exist, 1);
            }

            state = state.set('addToCartLength', addToCart.length);
            state = state.set('addToCart', addToCart);
            return state
        }

        case SET_CART_ITEM_CHECK: {
            let addToCart = [...state.addToCart]

            let exist = state?.addToCart?.findIndex((cart) => action?.payload?.id == cart.id)
            if (exist > -1) {
                addToCart[exist].check = !addToCart[exist].check
            }

            state = state.set('addToCartLength', addToCart.length);
            state = state.set('addToCart', addToCart);
            return state
        }


        case SET_CART_ITEM_DELIVERY: {
            let deliveryMode = state.deliveryMode
            state = state.set('deliveryMode', deliveryMode == DELIVERY ? "" : DELIVERY);
            return state
        }

        case SET_CART_ITEM_PICKUP: {
            let deliveryMode = state.deliveryMode
            state = state.set('deliveryMode', deliveryMode == PICKUP ? "" : PICKUP);
            return state
        }

        case SET_ADDRESS_ID: {
            console.log(action?.payload)
            state = state.set('addressId', action?.payload);
            return state
        }

        default:
            return state;
    }
}
