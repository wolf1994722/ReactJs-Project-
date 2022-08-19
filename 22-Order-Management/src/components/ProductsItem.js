import React, { useState, useCallback , useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Loading from './Loading'
import { FcSearch } from "react-icons/fc";

function ProductsItem() {
  const [product_id_key, setproduct_id_key] = useState(1)
  const [name_key, setName_key] = useState(1)
  const [stock_key, setStock_key] = useState(1)
  const [selling_price_key, setSelling_price_key] = useState(1)

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const { products, setProducts, loading, setLoading } = useGlobalContext()
  const [productsData, setProductsData] = useState(products)

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...products].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder !== "asc" ? 1 : -1)
        );
      });
      setProducts(sorted);
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
    for (let i = 0; i < products.length; i++) {
      let product_id = products[i].product_id.toString().toLowerCase()
      let name = products[i].name.toString().toLowerCase()
      let stock = products[i].stock.toString().toLowerCase()
      let selling_price = products[i].selling_price.toString().toLowerCase()

      if ( product_id.includes(searchTerm) || name.includes(searchTerm) || stock.includes(searchTerm) || selling_price.includes(searchTerm)) {
        newData.push(products[i])
      }
    }
    setProductsData([])
    setProductsData(newData)
  },
    [products,searchTerm],
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
          Products
        </h2>
        <div className="cocktails-center">
          <div className="container bg-white">
            <div className="row" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" onClick={() => {
                      handleSortingChange('product_id');
                      setproduct_id_key(product_id_key + 1)
                    }}>
                      Product Id &nbsp;
                      {product_id_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => {
                      handleSortingChange('name');
                      setName_key(name_key + 1)
                    }}>
                      Name &nbsp;
                      {name_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => {
                      handleSortingChange('stock');
                      setStock_key(stock_key + 1)
                    }}>
                      Stock &nbsp;
                      {stock_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => {
                      handleSortingChange('selling_price');
                      setSelling_price_key(selling_price_key + 1)
                    }}>
                      Selling Price &nbsp;
                      {selling_price_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    {/*  <th scope="col">Description</th> */}
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData && productsData.map((product, index) =>
                    <tr key={index}>
                      <td>{product.product_id}</td>
                      <td>{product.name}</td>
                      <td>{product.stock}</td>
                      <td>{product.selling_price}</td>
                      {/*<td>{order.description}</td>*/}
                      <td>
                        <div className="d-flex justify-content-between align-items-center btn-cont">
                          <div className="btn-group" style={{ margin: "5px 0 10px 0" }}>
                            <Link to={`edit/${product.product_id}`} className="btn btn-sm btn-outline-secondary">Edit Order </Link>
                            <Link to={`delete/${product.product_id}`}>
                              <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(product.product_id)}>Delete Order</button>
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

export default ProductsItem