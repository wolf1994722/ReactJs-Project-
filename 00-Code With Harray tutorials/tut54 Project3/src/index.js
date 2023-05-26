import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

//* context
import NoteState from './contexts/notes/NoteState'
import AlertState from './contexts/alert/AlertState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NoteState>
      <AlertState>
        <App />
      </AlertState>
    </NoteState>
  </BrowserRouter>
);