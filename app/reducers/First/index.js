import { firstTypes } from 'actions/First/types';

const initialState = {
  isValidate: false,
};

export const firstReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case firstTypes.SET_FIRST_STATE:
    return { ...state, isValidate: payload };
  default:
    return state;
  }
};
