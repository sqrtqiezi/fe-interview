import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { images } from './reducers';
import api from './middleware/api';

const win = global;

const reducer = combineReducers({
  images
});

const middlewares = [thunk, api];
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f,
);

export default createStore(reducer, {}, storeEnhancers);
