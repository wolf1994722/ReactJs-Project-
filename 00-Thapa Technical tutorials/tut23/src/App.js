import {useState} from 'react'
import './static/app.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('Pet 🐰🐹🐶🙀')

  const Inc = () => {
    setCount(count+1)
    if(count%2) {
      document.body.style.backgroundColor = '#ff5733'
      setData('Pet 🐰🐹🐶🙀')
    } else {
      document.body.style.backgroundColor = '#4cff33'
      setData('My name is Khan 🙋‍♀️')
    }
  }

  return (
    <> 

      <div className="center">
        <div className="content">
          <p>
            <span>{data}</span>
            <span style={{backgroundColor : (count%2 === 0 ? 'red' : 'purple')}}>text</span>
            <button onClick={Inc}>click me</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
