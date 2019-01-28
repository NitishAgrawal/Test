import { put } from 'redux-saga/effects';
import _ from 'lodash';
import { getData } from 'api';
import { NetworkStatus } from 'components';
import { ActionCreators } from '../../../actions';

export function* callFirstWorker(params = { item: 'value' }) {
  if (NetworkStatus.isInternetConnected) {
    try {
      // TODO Loader
      yield put(ActionCreators.showLoader());
      const response = yield getData(params);

      if (!_.isNil(response)) {
        // TODO
      }
    } catch (error) {
      // showExceptionErrorMessage();
    } finally {
      yield put(ActionCreators.hideLoader());
    }
  }
}
