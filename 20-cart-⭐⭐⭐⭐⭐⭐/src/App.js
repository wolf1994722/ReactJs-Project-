import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {loading} = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App

// learning

// 1. this project is must
// 2..filter((cartItem)=> cartItem.amount !== 0) to abovid  0 value

// 3. enchance reduce js by javascript nugget -> coding addict video | understand this code
// let {amount,total} = state.cart.reduce((cartTotal,cartItem) => {
//   const {price,amount} = cartItem
//   const itemTotal = amount*price

//   cartTotal.total += itemTotal
//   cartTotal.amount += amount
//   return cartTotal
// },{
//   total: 0,
//   amount: 0,
// })

// total = parseFloat(total.toFixed(2))

// 4. fetch - async  -await
//   const fetchData = async () => {
  // dispatch({ type: 'LOADING' })
  // const response = await fetch(url)
  // let data = await response.json()

// 5. we can have as many useEffect as we want

// 6. RAISE ERROR ->     throw new Error('no matching action type')