const { SET_CATEGORIES } = require('./types').default;

export function setCategories(payload) {
  return {
    type: SET_CATEGORIES,
    payload,
  };
}
