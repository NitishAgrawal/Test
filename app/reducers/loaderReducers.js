/* eslint no-underscore-dangle: 0 */

import {
  SHOW_LOADER,
  HIDE_LOADER,
} from 'actions/loaderActions';

const initialState = {
  isLoading: false,
};

export const loaderReducers = (state = initialState, { type }) => {
  if (type === 'undefined') {
    return state;
  }

  switch (type) {
  case SHOW_LOADER:
    return {
      ...state,
      isLoading: true,
    };

  case HIDE_LOADER:
    return {
      ...state,
      isLoading: false,
    };

  default:
    return state;
  }
};

