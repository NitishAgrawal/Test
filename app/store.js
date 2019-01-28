import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'; // eslint-disable-line
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'reducers';
import { rootSaga } from 'sagas';

const middleware = [];

// Environment check
const dev = __DEV__;
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

middleware.push(sagaMiddleware);
if (dev) {
  middleware.push(logger);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export { store };

sagaMiddleware.run(rootSaga);
