import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FireBaseContext from "../context/firebaseContext";

const LogIn = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(FireBaseContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userData);
    navigate('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" className="signup-page">
        <h1>welcome to Login 🔥🐇</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email here"
            onChange={handleChanges}
            value={userData.email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChanges}
            value={userData.password}
            placeholder="Enter password here"
            minLength={6}
            required
          />
        </div>
        <button>LogIn</button>
      </form>
    </>
  );
};

export default LogIn;
