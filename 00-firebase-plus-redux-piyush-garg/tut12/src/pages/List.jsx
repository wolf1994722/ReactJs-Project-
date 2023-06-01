import React, { useState } from "react";
import { useFireBase } from "../contexts/firebaseState";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const List = () => {
  const firebase = useFireBase();
  const [userData, setUserData] = useState({
    name: "",
    isbnNumber: "",
    price: "",
    coverPic: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    firebase.handleCreateNewListing(userData)
  };

  return (
    <div className="container my-3 d-flex align-item-center justify-content-center flex-column">
      <Form onSubmit={handleSubmit}>
        <h1 className="my-3">Add Item 🔥</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book id"
            name="isbnNumber"
            onChange={handleChange}
            value={userData.isbnNumber}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book name"
            name="name"
            onChange={handleChange}
            value={userData.name}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book price"
            name="price"
            onChange={handleChange}
            value={userData.price}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Picture</Form.Label>
          <Form.Control
            type="file"
            placeholder="Browse cover picture"
            name="coverPic"
            onChange={handleChange}
            value={userData.coverPic}
            required
          />
        </Form.Group>
        <Button variant="primary" className="btn-sm btn-dark" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
  );
};

export default List;
