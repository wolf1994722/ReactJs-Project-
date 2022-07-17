import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  let sum = 0
  for (let i = 0; i < transactions.length; i++) {
    sum += transactions[i].amount
  }

  // const amount = transactions.map(item => item.amount)
  // const total = amount.reduce((acc,item) => acc+=item,0).toFixed(2)

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${sum.toFixed(2)}</h1> 
    </div>
  );
}

export default Balance;
