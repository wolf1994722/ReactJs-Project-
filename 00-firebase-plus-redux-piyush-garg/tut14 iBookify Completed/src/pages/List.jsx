import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFireBase, useAlert } from "../contexts";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const List = () => {
  const firebase = useFireBase();
  const navigate = useNavigate();
  const alert = useAlert()
  const [userData, setUserData] = useState({
    name: "",
    isbnNumber: "",
    price: "",
    coverPic: null, // Changed to null instead of an empty string
  });

  const handleChange = (e) => {
    if (e.target.name === "coverPic") {
      const file = e.target.files[0]; // Get the selected file
      setUserData((prev) => ({
        ...prev,
        coverPic: file,
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert.showAlert('Add Book 📙 successfully', 'info')

    if (userData.coverPic) {
      const imageFile = userData.coverPic;
      const data = {
        name: userData.name,
        isbnNumber: userData.isbnNumber,
        price: userData.price,
        coverPic: imageFile,
      };

      firebase
        .handleCreateNewListing(data)
        .then(() => {})
        .catch((error) => {
          console.log("Error uploading book listing:", error);
        });
    }
    setUserData({
      name: "",
      isbnNumber: "",
      price: "",
      coverPic: null,
    });
    navigate('/')
  };

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
