import React, { useState, useEffect } from "react";
import { useFireBase } from "../contexts/firebaseState";
import { Cards } from "../components";

const Home = () => {
  const [books, setBooks] = useState([]);
  const firebase = useFireBase();
  useEffect(() => {
    firebase.listAllBooks().then((books) => {
      setBooks(books.docs);
    });
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1>Listing all Books 📙</h1>
        <div className="row">
          {books.map((book, idx) => {
            return <div className="col-md-3 m-2" key={idx}>
              <Cards {...book.data()} />
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
