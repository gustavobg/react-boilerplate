import TaskList from "./task/TaskList";
import { Route,  BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={TaskList} />
        <Route path="/tasks" component={TaskList} />
      </Fragment>
    </Router>
  </Provider>
);

export default Root;
