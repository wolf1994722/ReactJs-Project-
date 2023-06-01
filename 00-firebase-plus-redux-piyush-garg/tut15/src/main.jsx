import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FirebaseState } from "./context/firebaseState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseState>
      <App />
    </FirebaseState>
  </React.StrictMode>
);
