import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `you have clicked ${count} times`
  }, [count])

  return (
    <>
      <p>
        Number of 🐹 {count}
      </p>

      <button onClick={() => setCount(count + 1)}>
        🙋‍♀️
      </button>
    </>
  );
}

export default App;
