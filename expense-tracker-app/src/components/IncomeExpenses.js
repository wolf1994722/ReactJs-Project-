import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  let income = 0.00
  let expense = 0.00
  for (let i = 0; i < transactions.length; i++) {
    let amount = transactions[i].amount
    if(amount>=0){
      income += amount
    }else{
      expense += amount
    }
  }
  expense = -expense.toFixed(2)
  income = income.toFixed(2)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>

      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
