import types from "../actionTypes/constituent";

const initialState = {
  constituent: {}
}

const constituents = (state = initialState, action) => {
  switch(action.type) {
    case types.SAVE_CONSTITUENT:
      return { ...state, constituent: {...action.constituent} }
    default:
      return state;
  }
}

export default constituents;