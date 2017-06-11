import './index.css';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import App from './App';

window.store = configureStore();

render(
  <Provider store={window.store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
