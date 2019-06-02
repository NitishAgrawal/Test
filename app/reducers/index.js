import { combineReducers } from 'redux';
import { allStoresReducer as allStores } from 'reducers/AllStores';
import { loaderReducers } from 'reducers/loaderReducers';

export const rootReducer = combineReducers({
  allStores,
  loaderReducers,
});
