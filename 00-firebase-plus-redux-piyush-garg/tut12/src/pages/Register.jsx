import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFireBase } from "../contexts/firebaseState";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const firebase = useFireBase();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (firebase.isLoggedIn) navigate("/");
  }, [firebase, navigate]);

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
    const result = await firebase.signUpUserWithEmailAndPassword(userData);
  };

  return (
    <>
      <div className="container my-5 d-flex align-item-center justify-content-center">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-3">Register 🔥</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={userData.email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              minLength={6}
              onChange={handleChange}
              value={userData.password}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" className="btn-sm btn-dark" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
