import React from 'react';
import App from 'components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>, 
  document.querySelector('#root'))