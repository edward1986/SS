const { SET_CATEGORIES } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CATEGORIES: {
      state = state.set('categories', action.payload);
      return state
    }
    default:
      return state;
  }
}
