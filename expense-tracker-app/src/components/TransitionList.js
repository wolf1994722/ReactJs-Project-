import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transtation from "./Transtation";

function TransitionList() {
  const {transactions} = useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(item => <Transtation item={item}></Transtation>)}
      </ul>
    </div>
  );
}

export default TransitionList;
