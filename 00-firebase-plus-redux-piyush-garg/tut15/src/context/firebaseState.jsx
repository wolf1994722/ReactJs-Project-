import React, { useContext } from "react";
import FireBaseContext from "./firebaseContext";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBspbN-VFWkyjv9k4zcbR46D7fYlqw_npk",
  authDomain: "messaging-app-c0149.firebaseapp.com",
  projectId: "messaging-app-c0149",
  storageBucket: "messaging-app-c0149.appspot.com",
  messagingSenderId: "870462565340",
  appId: "1:870462565340:web:59d4f283e10754b9d5fd19",
};

export const useFirebase = () => useContext(FireBaseContext)

export const firebaseApp = initializeApp(firebaseConfig); //* app
export const messaging = getMessaging(firebaseApp);

export const FirebaseState = (props) => {
  return (
    <FireBaseContext.Provider value={{
      
    }}>
      {props.children}
    </FireBaseContext.Provider>
  );
};
