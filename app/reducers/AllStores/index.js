import { storesTypes } from 'actions/types';
import _ from 'lodash';

const initialState = {
  allStores: null, 
};

export const allStoresReducer = (state = initialState, action) => {
  switch (action.type) {
  case storesTypes.FETCH_ALL_STORES_RESPONSE:
    return { ...state, allStores: _.get(action, 'data.data.stores') };
  default:
    return state;
  }
};
