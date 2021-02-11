import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga'
import reducer from '../reducers';
import { imageWatcher } from '../sagas/';

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(reducer, applyMiddleware(sagaMiddleWare, logger));

sagaMiddleWare.run(imageWatcher);
