import { combineReducers } from 'redux';
import * as a from './actions';

const taskInit = {
  createDate: new Date(),
  value: '',
  done: false
};

const taskListInit = {
  tasks: [],
  isFetching: false
};

const taskListReducer = (state = taskListInit, action) => {
  switch (action.type) {
    case a.CREATE_TASK:
      return {
        ...state,
        isFetching: false
      };
    case a.UPDATE_TASK:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default combineReducers({
  tasks: taskListReducer
});
