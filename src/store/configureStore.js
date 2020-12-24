/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(sagaMiddleware),
)(createStore);

const rootReducer = createReducer();

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}

