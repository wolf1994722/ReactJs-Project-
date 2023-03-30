import { useState} from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        #1 Number of 🐰🐹😊 {count}
      </p>
      <button 
        onClick={(()=>setCount(count+1), ()=>{
          alert('you have incremented value')
        })}>
        👍
      </button>
      <button 
        onClick={(()=>setCount(count-1), ()=>{
          alert('you have decremented value')
        })}>
        👎
      </button>
    </>
  );
}

export default App;
