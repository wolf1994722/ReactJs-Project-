import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const intialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)
  const [state, dispatch] = useReducer(reducer, intialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increaseValue = (id) => {
    dispatch({ type: 'INCREASE_VALUE', payload: id })
  }

  const decreaseValue = (id) => {
    dispatch({ type: 'DECREASE_VALUE', payload: id })
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    let data = await response.json()
    dispatch({ type: 'DISPLAY_ITEM', payload: data })
  }

  useEffect(() => {
    fetchData()
    return () => { }
  }, [])


  useEffect(() => {

    dispatch({ type: 'GET_TOTALS' })
    // dispatch({ type: 'RANDOM' }) THROW NEW ERROR

    return () => {

    }
  }, [state.cart])


  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseValue,
        decreaseValue,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
