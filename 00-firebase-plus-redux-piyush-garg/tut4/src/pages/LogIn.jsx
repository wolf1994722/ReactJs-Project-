import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const LogIn = () => {
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
    console.log("submitted");
    loginUser(userData);
  };

  const loginUser = ({ email, password }) => {
    try {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("successfull login");
      })
      .catch((err) => {
        console.log("err.code :>> ", err.code);
        console.log("err.message :>> ", err.message);
      });
    } catch (error) {
      console.log('error : ' + error)
    }
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
