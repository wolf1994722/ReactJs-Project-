import React, { useState } from "react";
import "./App.css";
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    let amount = Number(count)
    if (amount <= 0) setText(data.slice(0, 1))
    else if (0 < amount && amount <= 9) setText(data.slice(0, amount))
    else {
      let temp = Math.floor(amount / 9)
      let arr = []
      for (let i = 0; i < temp; i++) {
        arr.push(...data)
      }
      arr = arr.concat(data.slice(0, amount % 9))
      setText(arr)
    }
  }

  return <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form onSubmit={handleChange} className="lorem-form">
      <label htmlFor="amount">Paragraphs : </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
      <button className="btn" type="submit">Generate</button>
    </form>
    <article className="lorem-text">
      {
        text.map((item, index) => {
          return <p key={index}>{item}</p>
        })
      }
    </article>
  </section>;

}

export default App;
