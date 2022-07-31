import React, { useState, useEffect } from "react";
import "./App.css";
import List from './List'
import Alert from './Alert'

const getlocalStorage = ()=>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(list)
  }else return []
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getlocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  // const [alert, setAlert] = useState({ show: true, msg: 'hello world', type: 'success' })
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      // setAlert({ show: true, msg: 'please enter value', type: 'danger' })
      showAlert(true, 'danger', 'please enter value')

    } else if (name && isEditing) {
      // deal with edit
      let newList = list.map(item => {
        if (editID === item.id)
          return { ...item, title: name }
        else
          return item
      })
      setList(newList)
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')

    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({
      show,
      type,
      msg
    })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    let newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  const editItem = (id) => {
    // console.log(typeof id);
    const specificItem = list.filter(item => {
      // console.log(item.id===id);
      return item.id === id
    })
    setIsEditing(true)
    setEditID(id)
    // console.log(specificItem);
    setName(specificItem[0].title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
    return () => { }
  }, [list])


  return <section className="section-center">
    <form onSubmit={handleSubmit} className="grocery-form">
      {alert.show && <Alert {...alert} list={list} removeAlert={showAlert}></Alert>}
      <h3>Grocery bud</h3>
      <div className="form-control">
        <input type="text" name="" id="" className="grocery" placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="submit-btn">
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>

    </form>
    {list.length > 0 && (
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem}></List>
        <button onClick={clearList} className="clear-btn">Clear Item</button>
      </div>
    )}
  </section>;

}

export default App;