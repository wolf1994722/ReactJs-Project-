import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFireBase } from "../contexts";
import Form from "react-bootstrap/Form";

const BookDetails = () => {
  const params = useParams();
  const firebase = useFireBase();
  const [bookData, setBookData] = useState(null);
  const [url, setUrl] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    firebase.getBookDetailsByBookId(params.bookId).then((res) => {
      setBookData(res.data());
    });
  }, []);

  useEffect(() => {
    if (bookData) {
      firebase.getImageURL(bookData.imageURL).then((result) => {
        setUrl(result);
      });
    }
  }, [bookData]);

  const placingOrder = async () => {
    if (qty <= 0) {
      alert("Please select valid Quanity of Book 🔥");
      setQty(1);
      return;
    }
    await firebase.placeOrder(params.bookId, qty);
  };

  if (bookData == null)
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
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h4>Book Name 📙</h4>
            <h1>{bookData.name}</h1>
            {url && (
              <img
                src={url}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "25rem",
                  objectPosition: "top",
                  width: "35rem",
                }}
              />
            )}
          </div>
          <div className="col" style={{ padding: "3rem 1rem" }}>
            <h4>Details</h4>
            <p>ISBN Number. {bookData.isbnNumber}</p>
            <p>Price Rs. {bookData.price}</p>
            <h4>Owner Details</h4>
            <div className="d-flex mb-3">
              <img
                src={bookData.photoURL}
                alt="image"
                style={{ borderRadius: "50%" }}
              />
              <div className="box mx-4 d-flex flex-column align-items-start justify-content-center">
                <p>Name : {bookData.displayName}</p>
                <p>Email : {bookData.userEmail}</p>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quality"
                name="qty"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                required
              />
            </Form.Group>
            <button className="btn btn-sm btn-success" onClick={placingOrder}>
              Bug Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
