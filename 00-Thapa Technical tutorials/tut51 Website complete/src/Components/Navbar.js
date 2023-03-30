import React from 'react'
import { NavLink } from 'react-router-dom'
import data from '../Data/navData'

const Active = {
  color: '#3498db',
  textDecoration: 'underline'
}

const styling = ({ isActive, isPending }) => {
  console.log(isActive, isPending)

  if (isActive) return Active;
}

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  YadavBoys
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    {data.map((item,index) => {
                      return (
                        <li className="nav-item" key={index}>
                          <NavLink 
                          className="nav-link active" 
                          aria-current="page" 
                          style={({ isActive, isPending }) => styling({ isActive, isPending })}
                          to={item.url}>
                            {item.name}
                          </NavLink>
                        </li>
                      )
                    })}

                  </ul>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar