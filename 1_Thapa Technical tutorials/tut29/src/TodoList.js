import './static/app.css'

function TodoList(props) {
    return (
        <>  
            <li className="items">
                <button type="submit" onClick={() => props.deleteItems(props.id)}>
                    ✔️
                </button>
                <span>
                    {props.data}
                </span>
            </li>
        </>
    )
}

export default TodoList