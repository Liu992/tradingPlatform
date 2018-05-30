import * as types from '../content'
let propertydetail = (active) => {
  return {
    type: types.GET_ACTIVE,
    active: active
  }
}

export default propertydetail