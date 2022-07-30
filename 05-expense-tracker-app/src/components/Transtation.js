import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transtation({ item }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = item.amount < 0 ? "-" : "+";
  let indicator = "";
  if (sign === "+") indicator = "plus";
  else indicator = "minus";
  return (
    <li className={`${indicator}`} key={item.id} onClick={()=>deleteTransaction(item.id)}>
      {item.text}{" "}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>{" "}
      <button className="delete-btn">x</button>
    </li>
  );
}

export default Transtation;
