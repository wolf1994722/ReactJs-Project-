import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Search></Search>
    </React.Fragment>
  );
}

// this.setState({[e.target.name] : e.target.value})

// const onAmountValue = (e, index, value) => {
//   setAmount(e.target.value)
// }

// import PropTypes from 'prop-types'
// ImageResult.prototype = {
  // images : PropTypes.array.isRequired
// }

export default App;
