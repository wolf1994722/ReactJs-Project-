import React, { useState } from 'react'
import img from '../images/todo.svg'
import TodoItem from './TodoItem'

function Todo() {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])

    //! edit
    const [toggle, setToggle] = useState(true)
    const [newEditItemIndex, setNewEditItemIndex] = useState(null)

    const addItem = () => {
        if (!toggle && inputData !== '') {
            //!edit
            setItems(items.map((item) => {
                if (item.id === newEditItemIndex) {
                    return {
                        ...item,
                        name: inputData
                    }
                }
                return item;
            }))
            setInputData('')
            setToggle(false)
            setNewEditItemIndex(null)
        } else if (inputData !== '') {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }

            setItems((prev) => {
                return [...prev, newInputData]
            })
            setInputData('')
        } else alert('Please fill data 🙏')
    }

    const deleteItem = (id) => {
        console.log(id)
        setItems((prev) => {
            return prev.filter((item) => {
                return item.id !== id;
            })
        })
    }

    const removeAll = () => {
        setItems([])
    }

    /*
        TODO: EDIT ITEM
        ? get id & name of data which user clicked to edit
        ? set toggle mode to change submit btn into edit btn
        ? update value of setInput with new updated value to edit
        ? to pass current element Id to new state variable for reference
     */

    const editItem = (id) => {
        //* find(item,index,arr)
        let newEditItem = items.find((item) => {
            return item.id === id;
        })
        setToggle(false)
        setInputData(newEditItem.name)
        setNewEditItemIndex(id);
    }


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={img} alt="" />
                        <figcaption>Add Your List Here 🐹</figcaption>
                    </figure>


                    <div className="addItems">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder='✍️ Add Item ... '
                            value={inputData}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') addItem();
                            }}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {toggle ? <i
                            className='fa fa-plus add-btn'
                            onClick={addItem}
                            title='Add Item'
                        ></i> : <i
                            className='far fa-edit add-btn'
                            onClick={addItem}
                            title='✍ Update Item'
                        ></i>}

                    </div>

                    <div className="showItems">
                        {items.map((item) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    id={item.id}
                                    deleteItem={deleteItem}
                                    editItem={editItem}
                                    name={item.name} />
                            )
                        })}
                    </div>

                    <div className="showItems">
                        <button
                            className="btn effect04"
                            onClick={removeAll}
                            data-sm-link-text="Remove All">
                            <span>
                                CHECK LIST
                            </span>
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Todo