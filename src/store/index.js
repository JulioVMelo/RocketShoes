import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
