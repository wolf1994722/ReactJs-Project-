import React from "react";
import FirebaseContext from "./firebaseContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDM0M-dvzsiZhcuoWXUNcxnPXTkBPqRyTQ",
  authDomain: "video-72376.firebaseapp.com",
  projectId: "video-72376",
  storageBucket: "video-72376.appspot.com",
  messagingSenderId: "1092002098456",
  appId: "1:1092002098456:web:d6607ec49e4e45eae7426d",
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
  databaseURL: "https://video-72376-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

const FirebaseState = (props) => {
  const signUpUser = ({ email, password }) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("successfull signUp");
          console.log(userCredential);
        })
        .catch((err) => {
          console.log("err.code :>> ", err.code);
          console.log("err.message :>> ", err.message);
        });
    } catch (error) {
      console.log("error : " + error);
    }
  };

  const loginUser = ({ email, password }) => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("successfull login");
          console.log(userCredential);
        })
        .catch((err) => {
          console.log("err.code :>> ", err.code);
          console.log("err.message :>> ", err.message);
        });
    } catch (error) {
      console.log("error : " + error);
    }
  };

  const putData = (key, data) => {
    /*
      const key =  "users/vivek"
      const data = {
        id: 2,
        name: "vivek",
      }
     */
    set(ref(db, key), data);
  };

  return (
    <>
      <FirebaseContext.Provider
        value={{ auth, db, loginUser, signUpUser, putData }}
      >
        {props.children}
      </FirebaseContext.Provider>
    </>
  );
};

export default FirebaseState;
