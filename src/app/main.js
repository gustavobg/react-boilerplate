import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './Root';
import { AppContainer } from 'react-hot-loader';

const store = configureStore;

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default;
    render(NextApp);
  });
}
