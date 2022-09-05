const { SET_DRAWER_VISIBLE } = require('./types').default;

export function setDrawerVisible(payload) {
  return {
    type: SET_DRAWER_VISIBLE,
    payload,
  };
}
