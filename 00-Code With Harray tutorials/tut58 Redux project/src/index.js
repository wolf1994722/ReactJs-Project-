import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state/store'

//* context
import AlertState from './contexts/alert/AlertState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AlertState>
        <App />
      </AlertState>
    </Provider>
  </BrowserRouter>
);