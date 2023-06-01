import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarData } from "../static";
import { useFireBase } from "../contexts/firebaseState";

const Navbar = () => {
  const location = useLocation();
  const firebase = useFireBase();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            📒 Bookify
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {NavbarData.map((item, idx) => {
                return (
                  <li className="nav-item" key={idx}>
                    <Link
                      className={`nav-link ${
                        location.pathname === `/${item.name}` ? "active" : ""
                      }`}
                      aria-current="page"
                      to={`${item.url}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <form className="d-flex" role="search">
              {!firebase.isLoggedIn ? (
                <>
                  <Link
                    className="btn btn-outline-light btn-sm"
                    to={"/login"}
                    role="button"
                  >
                    Login
                  </Link>

                  <Link
                    className="btn btn-outline-light mx-2 btn-sm"
                    to={"/signup"}
                    role="button"
                  >
                    SignUp
                  </Link>
                </>
              ) : (
                <Link
                  className="btn btn-outline-light btn-sm"
                  to={"/login"}
                  role="button"
                >
                  LogOut
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
