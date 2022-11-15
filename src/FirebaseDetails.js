// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDTDd19lVrEikBZthBxyY2ZOHqnHMZam80",
  authDomain: "script-1a7ed.firebaseapp.com",
  projectId: "script-1a7ed",
  storageBucket: "script-1a7ed.appspot.com",
  messagingSenderId: "873906101366",
  appId: "1:873906101366:web:94212dea58f5f137a79357",
  measurementId: "G-8XPW5TSSYX"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
// we export and use for our loging authentication
export  {db, auth}

// const app = initializeApp(firebaseConfig);
