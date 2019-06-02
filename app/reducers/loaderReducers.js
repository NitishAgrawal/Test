/* eslint no-underscore-dangle: 0 */
import { storesTypes } from 'actions/types';

const initialState = {
  isLoading: false,
};

export const loaderReducers = (state = initialState, { type }) => {
  if (type === 'undefined') {
    return state;
  } 

  switch (type) {
  case storesTypes.SHOW_LOADER:
    return {
      ...state,
      isLoading: true,
    };

  case storesTypes.HIDE_LOADER:
    return {
      ...state,
      isLoading: false,
    };

  default:
    return state;
  }
};

