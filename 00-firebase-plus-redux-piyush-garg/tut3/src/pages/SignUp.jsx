import React, { useState } from "react";
import { app } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignUp = () => {
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
    signUpUser(userData)
  }

  const signUpUser = ({email, password}) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('success')
        console.log(userCredential);
      })
      .catch((err) => {
        console.log("err.code :>> ", err.code);
        console.log("err.message :>> ", err.message);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post" className="signup-page">
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
        <button>SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
