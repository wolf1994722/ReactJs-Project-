import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFireBase } from "../contexts";
import { Cards } from "../components";

const ViewingOrder = () => {
  const firebase = useFireBase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      const fetchOrders = async () => {
        firebase.fetchMyBooks()?.then((result) => {
          setBooks(result.docs);
        });
      };
      fetchOrders();
    }
  }, [firebase]);

  if (!firebase.isLoggedIn) {
    return (
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh", background: "#f5f7f6" }}
      >
        <p className="my-1">🙏 Please do Login in</p>
        <Link to={"/login"} className="btn btn-sm btn-dark">
          Login
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {books.map((book, idx) => {
            return (
              <div className="col-md-4">
                <Cards
                  key={idx}
                  {...book.data()}
                  link={`/book/orders/${book.id}`}
                  btnContent={'Order details'}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewingOrder;
