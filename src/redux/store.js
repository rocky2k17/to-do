import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger'
import rootReducer from './rootReducer'

//root reducer
//saga file


const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run();

export default store;