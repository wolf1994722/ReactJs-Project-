import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App1 from './App1';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1 />
    <App2/>
  </React.StrictMode>
);