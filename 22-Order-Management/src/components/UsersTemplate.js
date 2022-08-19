import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Loading from './Loading'
import { FcSearch } from "react-icons/fc";

function UsersTemplate() {
  const [user_id_key, setUser_id_key] = useState(1)
  const [name_key, setName_key] = useState(1)

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const { users, setUsers, loading, setLoading } = useGlobalContext()
  const [UserData, setUserData] = useState(users)

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...users].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder !== "asc" ? 1 : -1)
        );
      });
      setUsers(sorted);
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
    for (let i = 0; i < users.length; i++) {
      let user_id = users[i].user_id.toString().toLowerCase()
      let name = users[i].name.toString().toLowerCase()

      if (user_id.includes(searchTerm) || name.includes(searchTerm)) {
        newData.push(users[i])
      }
    }
    setUserData([])
    setUserData(newData)
  },
    [searchTerm,users],
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
          User
        </h2>
        <div className="cocktails-center">
          <div className="container bg-white">
            <div className="row" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
              <table className="table table-bordered">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" onClick={() => {
                      handleSortingChange('user_id');
                      setUser_id_key(user_id_key + 1)
                    }}>
                      User Id &nbsp;
                      {user_id_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    <th scope="col" onClick={() => {
                      handleSortingChange('name');
                      setName_key(name_key + 1)
                    }}>
                      Name &nbsp;
                      {name_key % 2 === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                    </th>
                    {/*  <th scope="col">Description</th> */}
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {UserData && UserData.map((user, index) =>
                    <tr key={index}>
                      <td>{user.user_id}</td>
                      <td>{user.name}</td>
                      <td>Good user</td>
                      {/*<td>{order.description}</td>*/}
                      <td>
                        <div className="d-flex justify-content-between align-items-center btn-cont">
                          <div className="btn-group" style={{ margin: "5px 0 10px 0" }}>
                            <Link to={`edit/${user.user_id}`} className="btn btn-sm btn-outline-secondary">Edit User </Link>
                            <Link to={`delete/${user.user_id}`}>
                              <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(user.user_id)}>Delete User</button>
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

export default UsersTemplate