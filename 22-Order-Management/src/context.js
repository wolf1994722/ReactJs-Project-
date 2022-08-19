import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

// basic url setup
const productsUrl = 'https://assessment.api.vweb.app/products'
const usersUrl = 'https://assessment.api.vweb.app/users'
const ordersUrl = 'https://assessment.api.vweb.app/orders'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${productsUrl}`)
      const data = await response.json()
      if (data) {
        let newProducts = data.map((item) => {
          let { product_id, name, stock, selling_price } = item
          return { product_id, name, stock, selling_price }
        })
        setProducts(newProducts)
      } else setProducts([])
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }, [])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${usersUrl}`)
      const data = await response.json()
      if (data) {
        let newProducts = data.map((item) => {
          let { user_id, name } = item
          return { user_id, name }
        })
        setUsers(newProducts)
      } else setUsers([])
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }, [])

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${ordersUrl}`)
      const data = await response.json()
      if (data) {
        let newProducts = data.map((item) => {
          let { order_id, product_id, quantity, user_id, order_date } = item
          return { order_id, product_id, quantity, user_id, order_date }
        })
        setOrders(newProducts)
      } else setOrders([])
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchProducts()
    fetchUsers()
    fetchOrders()
    return () => { }
  }, [searchTerm, fetchProducts, fetchUsers, fetchOrders])

  return <AppContext.Provider value={{
    loading,
    products,
    users,
    orders,
    searchTerm,
    setSearchTerm,
    setProducts,
    setUsers,
    setOrders,
    setLoading,
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
