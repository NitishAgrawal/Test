import { takeLatest } from 'redux-saga/effects';

import { firstTypes } from 'actions/First/types';

import { callFirstWorker } from './workers/eventOne';

export const sagas = [
  takeLatest(firstTypes.SET_FIRST_STATE, callFirstWorker),
];

