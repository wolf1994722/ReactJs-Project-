import React from "react";
import FirebaseContext from "./firebaseContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaN7y0q35etBSaTLszIw8v8Svu63GTjjU",
  authDomain: "bookify-10f1a.firebaseapp.com",
  projectId: "bookify-10f1a",
  storageBucket: "bookify-10f1a.appspot.com",
  messagingSenderId: "930297636756",
  appId: "1:930297636756:web:afdd09314cf17e5704d181"
};

const app = initializeApp(firebaseConfig);

const FirebaseState = (props) => {
  return (
    <FirebaseContext.Provider value={{}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;