import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [num, setNum] = useState(1)
  const [name, setName] = useState('')
  const [moves, setMoves] = useState('')


  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      setName(res.data.name)
      setMoves(res.data.moves.length)
      console.log(res.data)
    }
    getData();
  }, [num])


  return (
    <>

      {name !== '' && moves !== '' && <>
        <h2>Name is 🔥 {name}</h2>
        <h2>moves 🐹 = {moves}</h2>
      </>}
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value)
          // console.log(num) 
        }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

    </>
  );
}

export default App;
