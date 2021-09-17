import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './styles/index.scss'
import App from './components/App';
import Reducers from './reducers'
import Middlewares from './middlewares'

const store = createStore(Reducers, Middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
