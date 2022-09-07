import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
// import { taskCreationSaga } from './sagas.mock';

import { todos } from './sagas';
//root reducer
//saga file


const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(todos);

export default store;