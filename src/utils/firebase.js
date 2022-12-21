// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqh4sxbU07v6iht5MpyTuqKS9pA0oHKWQ",
  authDomain: "eshop-9ddf6.firebaseapp.com",
  databaseURL: "https://eshop-9ddf6-default-rtdb.firebaseio.com",
  projectId: "eshop-9ddf6",
  storageBucket: "eshop-9ddf6.appspot.com",
  messagingSenderId: "481760156701",
  appId: "1:481760156701:web:e29a43d2f6392e1dc2baf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);