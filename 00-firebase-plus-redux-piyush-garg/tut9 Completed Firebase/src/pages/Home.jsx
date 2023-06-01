import React, { useContext } from "react";
import FirebaseContext from "../context/firebaseContext";

const Home = (props) => {
  const { LogOut, getData } = useContext(FirebaseContext);
  const { user } = props;

  if (user === null) {
    return (
      <>
        <h1>welcome to Home 🔥🐇</h1>
        <button onClick={() => getData(1)}>get Data</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Hello {user} 🔥🐇</h1>
        <button onClick={LogOut}> Logout </button>

        <button onClick={() => getData('vishal')}>get Data</button>
      </>
    );
  }
};

export default Home;
