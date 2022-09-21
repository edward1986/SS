const { SET_USER, RESET_USER, USER_ADDRESS } = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER: {

      return {
        ...state,
        ...action.payload,
      };
    }
    case USER_ADDRESS: {
      console.log({
        ...state,
        address: action.payload
      })
      return {
        ...state,
        address: action.payload
      }
    }
    case RESET_USER: {
      return {
        username: '',
        email: '',
        password: '',
        userType: '',
        permitType: '',
        firstName: '',
        middleName: '',
        lastName: '',
        contactNumber: '',
        address: '',
        profileImage: '',
        image: '',
        name: '',
      };
    }
    default:
      return state;
  }
}
