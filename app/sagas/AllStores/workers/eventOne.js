import { put, call } from 'redux-saga/effects';
import _ from 'lodash';
import { getAllStores, searchStore } from 'api';
import { NetworkStatus } from 'components';
import { ActionCreators } from 'actions';
import { storesTypes } from 'actions/types';

function* manageResponseData(action, response) {
    if (action.type === storesTypes.FETCH_ALL_STORES || action.type === storesTypes.FETCH_SEARCHED_STORE) {
      yield put({ type: storesTypes.FETCH_ALL_STORES_RESPONSE, data: response, ...action.options });
    }
}

export function* callAllStoresWorker(action) {
  if (NetworkStatus.isInternetConnected) {
    try {
      yield put(ActionCreators.showLoader());
      let response;
      if (action.keyword) {
        response = yield searchStore({ keywork: action.keyword });
      } else {
        response = yield getAllStores();
      }
      if (!_.isNil(response)) {
        yield call(manageResponseData, action, response);
      }
    } catch (error) {
      // showExceptionErrorMessage();
    } finally {
      yield put(ActionCreators.hideLoader());
    }
  } else {
    // TODO add message
  }
}

// export function* callAllStoresWorker(params = { item: 'value' }) {
//   if (NetworkStatus.isInternetConnected) {
//     try {
//       // TODO Loader
//       yield put(ActionCreators.showLoader());
//       const response = yield getAllStores(params);

//       if (!_.isNil(response)) {
//         // TODO
//       }
//     } catch (error) {
//       // showExceptionErrorMessage();
//     } finally {
//       yield put(ActionCreators.hideLoader());
//     }
//   }
// }
