const { SET_ADDRESS, SET_CREATE_ADDRESS, SET_ADDRESS_ITEM} = require('./types').default;

export function setAddress(payload) {
  return {
    type: SET_ADDRESS,
    payload,
  };
}
export function setCreateAddress(payload) {
  return {
    type: SET_CREATE_ADDRESS,
    payload,
  };
}
export function setAddressItem(payload) {
  return {
    type: SET_ADDRESS_ITEM,
    payload,
  };
}
