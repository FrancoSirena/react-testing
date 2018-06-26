import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import React from 'react';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, 
    initialState, 
    compose( 
      applyMiddleware(async, stateValidator) )
    );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}