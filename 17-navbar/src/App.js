import React from "react";
// import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from './NavBar'
import Slidebar from './Slidebar'


function App() {
  return <div>
    <NavBar></NavBar>
    <Slidebar></Slidebar>
  </div>;
}

export default App;


// lesson 

// useRef as document.getElementById 
// we can change the value linkRef.current.value
// we can change the value linkRef.current.getBoundingClientRect() => for propertyp
// linkContainerRef.current.style.height  styling

// css is important for implementation

// 800px
// .links-container {
//   height: auto !important;
// }

// .links-container {
//   height: 0;
// }