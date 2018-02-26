import { combineReducers } from 'redux';
import task from './task/reducers';

const appReducer = combineReducers({
  task
});

export default (state, action) => {
  return appReducer(state, action);
};
