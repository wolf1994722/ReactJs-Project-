import React, { useContext, useEffect } from "react";
import { SignUp, Navbar, Home, LogIn } from "./pages";
import { Routes, Route } from "react-router-dom";
import FirebaseContext from "./context/firebaseContext";

function App() {
  const { user, checkWeatherLogin } = useContext(FirebaseContext);
  useEffect(() => {
    checkWeatherLogin();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
