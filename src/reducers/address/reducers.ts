import {find, isEmpty} from "lodash";

const { SET_ADDRESS, SET_CREATE_ADDRESS, SET_ADDRESS_ITEM} = require('./types').default;

const InitialState = require('./initialstate').default;

const initialState = new InitialState();

export default function basket(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ADDRESS: {
      state = state.set('addresses', action.payload);
      return state
    }

    case SET_CREATE_ADDRESS:{
      const _addresses = [...state.addresses, ]

      _addresses.push(action.payload)
      state = state.set('addresses',_addresses);
      return state
    }

    case SET_ADDRESS_ITEM:{
      let _addresses = [...state.addresses]
      let address = find(_addresses, function(o) { return o.id == action?.payload });

      if(address){
        state = state.set('address', address );
      }
      return state
    }
    default:
      return state;
  }
}
