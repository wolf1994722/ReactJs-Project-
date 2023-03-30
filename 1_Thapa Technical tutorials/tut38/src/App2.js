import { useState, useEffect } from 'react';

function App1() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        alert('Smile')
    }, [count1])

    return (
        <>
            <p>
                #3 Number of 😊 {count1}
            </p>
            <button
                onClick={(() => setCount1(count1 + 1))}>
                👍
            </button>

            <p>
                #3 Number of 🐰🐹 {count2}
            </p>
            <button
                onClick={(() => setCount2(count2 + 1))}>
                👍
            </button>
        </>
    );
}

export default App1;
