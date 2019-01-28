import { all } from 'redux-saga/effects';

import { networkSagas } from 'sagas/Network';
import { sagas as firstSagas } from 'sagas/First';

export function* rootSaga() {
  yield all([
    networkSagas,
    ...firstSagas,
  ]);
}
