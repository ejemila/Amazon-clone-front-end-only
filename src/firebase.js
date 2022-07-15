// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSFm0107iuJn_rUVWIW-naEXAoUR2FdY8",
  authDomain: "fir-132e1.firebaseapp.com",
  projectId: "fir-132e1",
  storageBucket: "fir-132e1.appspot.com",
  messagingSenderId: "459444129532",
  appId: "1:459444129532:web:49a38312e4bd492a165179",
  measurementId: "G-2PJ7RTH4NL"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
