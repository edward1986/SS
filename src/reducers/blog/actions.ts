const { SET_BLOGS } = require('./types').default;

export function setBlogs(payload) {
  return {
    type: SET_BLOGS,
    payload,
  };
}
