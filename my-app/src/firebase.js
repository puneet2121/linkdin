
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwUCWlxhzuCBvoEhio-7Q7LjCJhqb4T-U",
  authDomain: "linkedin-project-c8e5b.firebaseapp.com",
  projectId: "linkedin-project-c8e5b",
  storageBucket: "linkedin-project-c8e5b.appspot.com",
  messagingSenderId: "3298414977",
  appId: "1:3298414977:web:51cbe30f545591b4639880",
  measurementId: "G-CNRWP6V797"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};