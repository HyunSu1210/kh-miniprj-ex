import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbyNhNNPeJEPLUxAMWazHaGddd3je17hw",
  authDomain: "kh-mini-project-59f61.firebaseapp.com",
  projectId: "kh-mini-project-59f61",
  storageBucket: "kh-mini-project-59f61.appspot.com",
  messagingSenderId: "689616918608",
  appId: "1:689616918608:web:408b1be29483ad40471955",
  measurementId: "G-H6PGG6P5T0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
