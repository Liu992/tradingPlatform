import * as types from '../content';

let initialState = {
  name: 'propertydetail',
  active: 'deposit'
}
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACTIVE:
      return {
        ...state,
        active: action.active
      }
  
    default: return state
  }
}

export default reducer