import { combineReducers } from 'redux';

// import { firstReducer as first } from 'reducers/First';
import { loaderReducers } from 'reducers/loaderReducers';

export const rootReducer = combineReducers({
  // first,
  loaderReducers,
});
