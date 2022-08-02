import React from "react";
import "./App.css";
import Home from './Home'
import Sidebar from './Sidebar'
import Modal from "./Modal";

function App() {
  return (
    <React.StrictMode>
      <Home></Home>
      <Modal></Modal>
      <Sidebar></Sidebar>
    </React.StrictMode>
  );

}

export default App;


// learning
// onClick={()=>openModal()} or onClick={openModal}