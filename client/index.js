import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

render(
    <h1>Hello World</h1>,
    <Provider store = {store}><App/></Provider>,
  document.getElementById('root')
);