import { showLoading, hideLoading } from 'react-redux-loading-bar'
import types from "../actionTypes/constituent";
import constituents from "./../../data/constituents.json";

export const fetchContituent = (protfolio_id) => dispatch => {
  dispatch(showLoading());
  let selectedContituent = null;
  let contituent = {}
  constituents.forEach(element => {
    if(element.protifolios_id === parseInt(protfolio_id))
      selectedContituent = {...element};
  });
  if(selectedContituent) {
    selectedContituent.constituents.forEach(element => {
      let key = element.instrument.type
      if(!contituent[key])
        contituent[key] = {weights: [], isLocked: false, total: 0}
      contituent[key].weights.push({...element, model_weight: element.weight})
      contituent[key].total = contituent[key].total + element.weight;
    })
  }
  dispatch(saveContituent(contituent))
  setTimeout(() => {
    dispatch(hideLoading());
  }, 1000);
}

export const saveContituent = (constituent) => ({
  type: types.SAVE_CONSTITUENT,
  constituent: {...constituent}
})

export const deleteConstituent = (key, index) => (dispatch, getState) => {
  let { constituents } = getState();
  let { constituent } = constituents;
  constituent[key].weights.splice(index, 1);
  dispatch(saveContituent(constituent))
}

export const adjustConstituentWeight = (key, index, type) => (dispatch, getState) => {
  let { constituents } = getState();
  let { constituent } = constituents;
  let adjustValue = type === "INCREMENT" ? 1 : -1;
  if(constituent[key].weights[index].weight + adjustValue > 0) {
    constituent[key].weights[index].weight += adjustValue;
  }
  dispatch(saveContituent(constituent))
}

export const toggleLockConstituent = (key) => (dispatch, getState) => {
  let { constituents } = getState();
  let { constituent } = constituents;
  constituent[key].isLocked = !constituent[key].isLocked;
  dispatch(saveContituent(constituent))
}

export const rebalanceConstituent = () => (dispatch, getState) => {
  let { constituents } = getState();
  let { constituent } = constituents;
  let modWeight = 0, nonModWeight = 0, lockWeight = 0;
  let keys = Object.keys(constituent);
  keys.forEach(key => {
    constituent[key].weights.forEach((value) => {
      if(value.weight !== value.model_weight)
        modWeight += value.weight;
      else
        if(!constituent[key].isLocked) {
          nonModWeight += value.model_weight;
        } else {
          lockWeight += value.model_weight;
        }
    })
  })
  const percentage = (100-lockWeight-modWeight)/(nonModWeight);
  keys.forEach(key => {
    let tempTotal = 0;
    constituent[key].weights.forEach((value) => {
      if(value.weight === value.model_weight && !constituent[key].isLocked)
        value.weight = value.weight * percentage;
      value.model_weight = value.weight;
      tempTotal += value.model_weight;
    })
    constituent[key].total = tempTotal;
  })
  dispatch(saveContituent(constituent));
}