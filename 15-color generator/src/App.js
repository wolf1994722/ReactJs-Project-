import React, { useState } from "react";
import "./App.css";
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [value, setValue] = useState(10)
  const [list, setList] = useState(new Values('#f15025').all(20))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(Number(value))
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit} >
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" className={`${error ? 'error' : null}`} />
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)}
          placeholder="10"/>
          <button className="btn" type="submit">submit </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((item, index) => {
            return <SingleColor key={index} {...item} index={index} hexColor={item.hex}></SingleColor>
          })
        }
      </section>
    </>
  );
}

export default App;
