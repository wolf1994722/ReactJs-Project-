import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AlertState, FirebaseState } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertState>
      <FirebaseState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseState>
    </AlertState>
  </React.StrictMode>
);
