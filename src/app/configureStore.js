import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

let middlewares = [
  thunkMiddleware
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({}));
}

let configureStore = () => {
  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

// export default configureStore;
export default configureStore();
