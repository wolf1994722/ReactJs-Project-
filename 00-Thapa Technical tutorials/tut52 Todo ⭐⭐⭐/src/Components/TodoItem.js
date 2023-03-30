import React from 'react'

function TodoItem(props) {
  return (
    <>
      <div className="eachItem" key={props.id}>
        <h3>{props.name}</h3>
        <div className='todo-btn'>
          <i
            className="far fa-edit add-btn"
            title="✍ Edit Item"
            onClick={() => props.editItem(props.id)}></i>
          <i
            className="far fa-trash-alt add-btn"
            title="🚮 Delete item"
            onClick={() => props.deleteItem(props.id)}></i>
        </div>
      </div>
    </>
  )
}

export default TodoItem