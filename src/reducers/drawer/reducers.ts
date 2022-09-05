const { SET_DRAWER_VISIBLE } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DRAWER_VISIBLE: {
      state = state.set('headerVisible', action.payload);
      return state
    }
    default:
      return state;
  }
}
