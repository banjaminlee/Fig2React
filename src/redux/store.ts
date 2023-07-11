/**
  @desc createStore is used for creating a store for our redux
  @desc applyMiddleware is used for applying some middleware to redux, in this case we gonna using redux-saga
*/
import { createStore, applyMiddleware } from 'redux';

// This is the middleware that we gonna use redux-saga
import createSagaMiddleware from 'redux-saga';

// This is the root saga that will contain our sagas, or I should say model? XD
import rootSaga from './sagas';

// This will be contain our reducer for the application
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

// Run redux-saga
sagaMiddleware.run(rootSaga);

export default store;
