import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import initialState from './initialState';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return compose(applyMiddleware(...middleware));
};

const configureStore = (preloadedState = initialState, { isServer, req = null }) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, preloadedState, bindMiddleware([sagaMiddleware]));
  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }
  return store;
};

export default configureStore;
