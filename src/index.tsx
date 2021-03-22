import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './styles/style.scss';

import App from './App';

import { store } from './store/store';

import { TitleContext, titles } from './context';

ReactDOM.render(
  <Provider store={store}>
    <TitleContext.Provider value={titles}>
      <App />
    </TitleContext.Provider>
  </Provider>,
  document.getElementById('root'),
);