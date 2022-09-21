const { SET_BLOGS } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BLOGS: {
      state = state.set('blogs', action.payload);
      return state
    }
    default:
      return state;
  }
}
