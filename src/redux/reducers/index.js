import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading-bar'
import portfolios from "./portfolio";
import constituents from "./constituent";

export default combineReducers({
  portfolios,
  constituents,
  loadingBar: loadingBarReducer
})