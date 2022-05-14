// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBUvpus4NBVrLn3tsHFl0eLW2EKa_wXZZs",
    authDomain: "smit-c3cce.firebaseapp.com",
    projectId: "smit-c3cce",
    storageBucket: "smit-c3cce.appspot.com",
    messagingSenderId: "494162701758",
    appId: "1:494162701758:web:5bffbbab1876036f19ddef",
    measurementId: "G-R40TTDYZSM"
});





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBUvpus4NBVrLn3tsHFl0eLW2EKa_wXZZs",
//   authDomain: "smit-c3cce.firebaseapp.com",
//   projectId: "smit-c3cce",
//   storageBucket: "smit-c3cce.appspot.com",
//   messagingSenderId: "494162701758",
//   appId: "1:494162701758:web:5bffbbab1876036f19ddef",
//   measurementId: "G-R40TTDYZSM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = firebase.firestore();

export { firebaseConfig, db };