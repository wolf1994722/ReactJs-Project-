import React, { useState } from "react";
import FirebaseContext from "./firebaseContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";

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
const provider = new GoogleAuthProvider();

const FirebaseState = (props) => {
  const [user, setUser] = useState(null);

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

  const checkWeatherLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
        console.log("logged Home : ", user);
      } else {
        // User is signed out
        setUser(null);
        console.log("~ logged Home");
      }
    });
  };

  const LogOut = () => {
    signOut(auth);
  };

  const getData = (id) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    onValue(ref(db, "users"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  return (
    <>
      <FirebaseContext.Provider
        value={{
          user,
          auth,
          db,
          loginUser,
          signUpUser,
          putData,
          signUpWithGoogle,
          checkWeatherLogin,
          LogOut,
          getData,
        }}
      >
        {props.children}
      </FirebaseContext.Provider>
    </>
  );
};

export default FirebaseState;
