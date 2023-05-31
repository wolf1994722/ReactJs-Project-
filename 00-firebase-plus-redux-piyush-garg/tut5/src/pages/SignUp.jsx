import React, { useState, useContext } from "react";
import FireBaseContext from "../context/firebaseContext";

const SignUp = () => {
  const { signUpUser, putData } = useContext(FireBaseContext);
  const [userData, setUserData] = useState({
    name: "",
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
    signUpUser(userData);
    putData('users/' + userData.name, userData)
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post" className="signup-page">
        <h1>welcome to SignUp 🔥🐇</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name here"
            onChange={handleChanges}
            value={userData.name}
            required
          />
        </div>
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
        <button>SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
