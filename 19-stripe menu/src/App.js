import React from "react";
import "./App.css";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Navbar from "./Navbar";

function App() {
  return <React.Fragment>

    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Hero></Hero>
    <Submenu></Submenu>

  </React.Fragment>;
}

export default App;


// learning

// 1. diff b/w 
// onMouseOver={ (e) => displaySubMenu(e) }   this will work same as third one
// onMouseOver={ () => displaySubMenu() }     this will not pass e as default
// onMouseOver={ displaySubMenu }             this will pass e as default


// 2. location, page:{page,links}} 