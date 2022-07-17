import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransition() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

  function handleForm(e){
    e.preventDefault()
    const newTranstion = {
      id: Math.floor(Math.random()*100000),
      text,
      amount: +amount,
    }
    addTransaction(newTranstion)
  }
    
  return (
    <div>
      <h3>Add new transition</h3>
      <form onSubmit={handleForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransition;
