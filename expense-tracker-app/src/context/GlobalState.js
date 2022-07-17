import React, { createContext, useReducer } from "react";

const intialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: +300.12 },
    // { id: 3, text: "Book", amount: -20.52 },
    // { id: 4, text: "Camera", amount: +150 },
  ],
};

export const GlobalContext = createContext(intialState) 

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
              ...state,
              transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
              ...state,
              transactions: [action.payload,...state.transactions]
            }
        default:
            return state
    }
};

function GlobalState({children}) {
    const [state, dispatch] = useReducer(reducer, intialState)

  function deleteTransaction(id){
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload : id
    })
  }

  function addTransaction(transaction){
    dispatch({
      type : 'ADD_TRANSACTION',
      payload : transaction
    })
  }

  return <GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  }}>
    {children}
  </GlobalContext.Provider>;
}

export default GlobalState;
