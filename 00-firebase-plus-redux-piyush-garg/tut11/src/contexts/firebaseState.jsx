import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "./firebaseContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaN7y0q35etBSaTLszIw8v8Svu63GTjjU",
  authDomain: "bookify-10f1a.firebaseapp.com",
  projectId: "bookify-10f1a",
  storageBucket: "bookify-10f1a.appspot.com",
  messagingSenderId: "930297636756",
  appId: "1:930297636756:web:afdd09314cf17e5704d181",
};

export const useFireBase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseState = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signUpUserWithEmailAndPassword = ({ email, password }) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signInUserWithEmailAndPassword = ({ email, password }) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLoggedIn = user ? true : false

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
