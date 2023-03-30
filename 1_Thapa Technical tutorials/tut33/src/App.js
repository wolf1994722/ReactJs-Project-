import { useState } from 'react'
import TodoList from './TodoList'
import './static/app.css'

function App() {
  const [data, setData] = useState('')
  const [lists, setLists] = useState([])

  const inputEnter = (params) => {
    setData(params.target.value);
  }

  const collect = (e) => {
    e.preventDefault();
    if(data !== "") {
      // lists.push(data);
      // setData("");
      //! in this we do~ include input value attribute

      setLists((prev) => {
        return [...prev, data]
      })
      setData("")
    }
  }

  return (
    <>
      <div className="container">
        <div className="center">
          <h2>ToDo List 🔥</h2>

          <form onSubmit={collect}>
            <label htmlFor="name">
              <p>Add Item</p>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={data}
                onChange={inputEnter}/>
            </label>
            <button type="submit">
              +
            </button>
          </form>

          <div className="content">
            {lists.map((item,id) => {
                return <TodoList 
                  key={id} 
                  id={id}
                  data={item}/>
            })}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
