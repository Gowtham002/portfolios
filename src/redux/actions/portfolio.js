import { showLoading, hideLoading } from 'react-redux-loading-bar'
import types from "../actionTypes/portifolio";
import portfolios from "./../../data/portfolios.json";

export const fetchPortfolios = dispatch => {
  dispatch(showLoading());
  dispatch(fetchPortfoliosDone(portfolios))
  setTimeout(() => {
    dispatch(hideLoading());
  }, 1000);
}

export const fetchPortfoliosDone = (portfolios) => ({
  type: types.GET_PORTFOLIOS,
  portfolios: [...portfolios]
})