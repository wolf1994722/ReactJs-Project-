import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Alert } from "./components";

//* Pages
import {
  Home,
  Error,
  Register,
  Login,
  List,
  BookDetails,
  ViewingOrder,
  ViewOrderDeatails,
} from "./pages";

//* CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";

//* Context
import { AlertContext } from "./contexts";

const App = () => {
  let { alert } = useContext(AlertContext);
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/list" element={<List />} />
        <Route path="/book/view/:bookId" element={<BookDetails />} />
        <Route path="/book/orders" element={<ViewingOrder />} />
        <Route path="/book/orders/:bookId" element={<ViewOrderDeatails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
