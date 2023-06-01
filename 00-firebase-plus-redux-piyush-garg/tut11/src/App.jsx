import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";

//* Pages
import { Home, Error, Register,Login } from "./pages";

//* CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
