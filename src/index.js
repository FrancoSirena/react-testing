import React from 'react';
import App from 'components/App';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route paht="/" component={App} />
    </BrowserRouter>
  </Root>, 
  document.querySelector('#root'))