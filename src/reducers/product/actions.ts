const {
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

export function setProducts(payload) {
    return {
        type: SET_PRODUCTS, payload,
    };
}

export function setAddToCart(payload) {
    return {
        type: SET_ADD_TO_CART, payload,
    };
}

export function setCartItemDecrement(payload) {
    return {
        type: SET_CART_ITEM_DECREMENT, payload,
    };
}

export function setCartItemIncrement(payload) {
    return {
        type: SET_CART_ITEM_INCREMENT, payload,
    };
}

export function setCartItemDelete(payload) {
    return {
        type: SET_CART_ITEM_DELETE, payload,
    };
}

export function setCartItemCheck(payload) {
    return {
        type: SET_CART_ITEM_CHECK, payload,
    };
}

export function setCartItemDelivery() {
    return {
        type: SET_CART_ITEM_DELIVERY,
    };
}

export function setCartItemPickup() {
    return {
        type: SET_CART_ITEM_PICKUP,
    };
}export function setAddressId(payload) {
    return {
        type: SET_ADDRESS_ID,
        payload
    };
}
