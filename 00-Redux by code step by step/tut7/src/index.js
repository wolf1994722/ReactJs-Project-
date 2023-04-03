import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Services/Reducer/index'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);