import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";

function OrdersItem() {
  const [order_id_key, setorder_id_key] = useState(1)
  const [product_id_key, setproduct_id_key] = useState(1)
  const [quantity_key, setquantity_key] = useState(1)
  const [user_id_key, setuser_id_key] = useState(1)
  const [order_date_key, setorder_date_key] = useState(1)

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const { orders, setOrders, setLoading, loading } = useGlobalContext()
  const [orderDatas, setOrderDatas] = useState(orders)

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...orders].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder !== "asc" ? 1 : -1)
        );
      });
      setOrders(sorted);
    }
    setLoading(false)
  };

  const handleSortingChange = (accessor) => {
    setLoading(true)
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  }

  const [searchTerm, setSearchTerm] = useState('')
  const searchValue = useRef('')

  const searchCocktails = (e) => {
    setSearchTerm(searchValue.current.value.toLowerCase())
  }

  const filterData = useCallback(() => {
    let newData = []
    for (let i = 0; i < orders.length; i++) {
      let order_id = orders[i].order_id.toString()
      let product_id = orders[i].product_id.toString()
      let quantity = orders[i].quantity.toString()
      let user_id = orders[i].user_id.toString()
      let order_date = orders[i].order_date.toString()

      if (order_id.includes(searchTerm) || product_id.includes(searchTerm) || quantity.includes(searchTerm) || user_id.includes(searchTerm) || order_date.includes(searchTerm)) {
        newData.push(orders[i])
      }
    }
    setOrderDatas([])
    setOrderDatas(newData)
  },
    [orders,searchTerm],
  )

  useEffect(() => {
    // searchValue.current.focus()
    filterData()
    return () => { }
  }, [filterData])

  const handleSubmit = (e) => {
    // e.preventDefault()
  }

  if (loading) return <Loading />

  return (
    <main>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">
              <FcSearch></FcSearch>
              search </label>
            <input type="text" name="" id="name" ref={searchValue} onChange={searchCocktails} placeholder="Enter text" />
          </div>
        </form>
      </section>
      <section className="section">
        <h2 className="section-title">
          order
        </h2>
        <div className="order-container">

          <div className="container bg-white">
            <div className="row" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" onClick={() => { handleSortingChange('order_id'); setorder_id_key(order_id_key + 1) }}>
                      Order Id &nbsp;
                      {order_id_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => {
                      handleSortingChange('product_id');
                      setproduct_id_key(product_id_key + 1)
                    }}>
                      Product Id &nbsp;
                      {product_id_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => { handleSortingChange('quantity'); setquantity_key(quantity_key + 1) }}>
                      Quantity &nbsp;
                      {quantity_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => { handleSortingChange('user_id'); setuser_id_key(user_id_key + 1) }}>
                      User Id &nbsp;
                      {user_id_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => { handleSortingChange('order_date'); setorder_date_key(order_date_key + 1) }}>
                      Order Date &nbsp;
                      {order_date_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    {/*  <th scope="col">Description</th> */}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDatas && orderDatas.map((order, index) =>
                    <tr key={index}>
                      <td>{order.order_id}</td>
                      <td>{order.product_id}</td>
                      <td>{order.quantity}</td>
                      <td>{order.user_id}</td>
                      <td>{order.order_date}</td>
                      {/*<td>{order.description}</td>*/}
                      <td>
                        <div className="d-flex justify-content-between align-items-center btn-cont">
                          <div className="btn-group" style={{ margin: "5px 0 10px 0" }}>
                            <Link to={`edit/${order.order_id}`} className="btn btn-sm btn-outline-secondary">Edit Order </Link>
                            <Link to={`delete/${order.order_id}`}>
                              <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(order.order_id)}>Delete Order</button>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OrdersItem