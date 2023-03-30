import { useState, useEffect } from 'react';

//! it will be called for all b/c we have ~ passed []
function App1() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert('you have clicked value')
    })

    return (
        <>
            <p>
                #2 Number of 🐰🐹😊 {count}
            </p>
            <button
                onClick={(() => setCount(count + 1))}>
                👍
            </button>
            <button
                onClick={(() => setCount(count - 1))}>
                👎
            </button>
        </>
    );
}

export default App1;
