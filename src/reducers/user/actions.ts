const { SET_USER, RESET_USER, USER_ADDRESS } = require('./types').default;

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}
export function setReset(payload) {
  return {
    type: RESET_USER,
    payload,
  };
}
export function userAddress(payload) {
  return {
    type: USER_ADDRESS,
    payload,
  };
}
