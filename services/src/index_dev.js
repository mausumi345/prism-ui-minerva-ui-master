//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
// Standalone app index file
//
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import '../node_modules/prism-reactjs/dist/index.css';
// App Level CSS
import './App.less';

import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
/* eslint-enable react/jsx-filename-extension */
