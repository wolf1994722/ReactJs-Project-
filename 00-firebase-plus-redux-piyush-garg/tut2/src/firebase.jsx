import { initializeApp } from "firebase/app";

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