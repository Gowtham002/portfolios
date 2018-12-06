import types from "../actionTypes/portifolio";

const initialState = {
  portfolios: []
}

const portfolios = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_PORTFOLIOS:
      return { ...state, portfolios: action.portfolios }
    default:
      return state;
  }
}

export default portfolios;