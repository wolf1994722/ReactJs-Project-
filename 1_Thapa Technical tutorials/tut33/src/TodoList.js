import { useState } from 'react'
import './static/app.css'

function TodoList(props) {
    const [count, setCount] = useState(0)

    return (
        <>  
            <li className="items">
                <button type="submit" onClick={() => {
                    setCount(count+1);
                }}>
                    ✔️
                </button>
                <span style={(count%2 === 1) ? {textDecoration : 'line-through'} : {textDecoration : 'none'}}>

                    {props.data}
                </span>
            </li>
        </>
    )
}

export default TodoList