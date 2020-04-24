import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './assets/css/style.scss';
import './assets/css/blue.scss';
import './assets/css/scroll.scss';
import './assets/css/agreement.scss';
import './assets/css/loading.scss';
import './assets/css/modal.scss';
import App from './containers/App';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers,
    applyMiddleware(thunk)
    );

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Route component={App} />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
