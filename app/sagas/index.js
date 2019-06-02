import { all } from 'redux-saga/effects';

import { networkSagas } from 'sagas/Network';
import { sagas as allStoresSagas } from 'sagas/AllStores';

export function* rootSaga() {
  yield all([
    networkSagas,
    ...allStoresSagas,
  ]);
}
