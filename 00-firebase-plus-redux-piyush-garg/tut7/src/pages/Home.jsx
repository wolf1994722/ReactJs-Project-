import React, { useContext } from "react";
import FirebaseContext from "../context/firebaseContext";

const Home = (props) => {
  const {LogOut } = useContext(FirebaseContext)
  const { user } = props;

  if (user === null) {
    return (
      <>
        <h1>welcome to Home 🔥🐇</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Hello {user} 🔥🐇</h1>
        <button onClick={LogOut}> Logout </button>
      </>
    );
  }
};

export default Home;
