import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import TodoContainer from './containers/Todo';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
