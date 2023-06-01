import React, { useState, useEffect } from "react";
import { useFireBase } from "../contexts";
import { Cards } from "../components";

const Home = () => {
  const [books, setBooks] = useState([]);
  const firebase = useFireBase();
  useEffect(() => {
    firebase.listAllBooks().then((books) => {
      setBooks(books.docs);
    });
  }, []);

  if (books == null)
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", background: "#f5f7f6" }}
      >
        <img src={"/preloader.gif"} />
      </div>
    );
  return (
    <>
      <div className="container my-4">
        <h1>Listing all Books 📙</h1>
        <div className="row">
          {books.map((book, idx) => {
            return (
              <div className="col-md-4" key={idx}>
                <Cards link={`/book/view/${book.id}`} btnContent={'Buy Now'} {...book.data()} id={book.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
