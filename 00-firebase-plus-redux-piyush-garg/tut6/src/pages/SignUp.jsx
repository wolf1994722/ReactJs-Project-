import React, { useState, useContext } from "react";
import FireBaseContext from "../context/firebaseContext";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const { auth, signUpUser, putData } = useContext(FireBaseContext);
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
    putData("users/" + userData.name, userData);
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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

        <br />

        <span
          style={{ border: "1px solid #262626", padding: "7px 12px" }}
          onClick={signUpWithGoogle}
        >
          Sign Up with
          <img
            style={{ width: "15px", margin: "0 10px" }}
            src="https://icons-for-free.com/iconfiles/png/512/google-1320568243143037383.png"
            alt="google_logo"
          />
        </span>

        <br />
        <br />

        <button style={{ display: "block" }}>SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
