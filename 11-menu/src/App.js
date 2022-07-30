import React, { useState } from "react";
import "./App.css";
import items from "./data";
import Categories from './Categories'
import Menu from './Menu'

const allCategories = ['all',...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} allCategories={allCategories}></Categories>
      <Menu items={menuItems}></Menu>
    </section>
  </main>;

}

export default App;

// new learn 

// filter category from array 
// const allCategories = items.map(item => item.category)
// const allCategories = new Set(items.map(item => item.category))
// const allCategories = ['all',...new Set(items.map(item => item.category))]