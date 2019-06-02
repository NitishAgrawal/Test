import { takeLatest } from 'redux-saga/effects';

import { storesTypes } from 'actions/types';

import { callAllStoresWorker } from './workers/eventOne';

export const sagas = [
  takeLatest(storesTypes.FETCH_ALL_STORES, callAllStoresWorker),
  takeLatest(storesTypes.FETCH_SEARCHED_STORE, callAllStoresWorker),
];

