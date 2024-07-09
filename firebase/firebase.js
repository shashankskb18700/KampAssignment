// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as db from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMEQIHvysu24ZDDiApxv7kqsjnA6CmDmg",
  authDomain: "kampcode-e2730.firebaseapp.com",
  projectId: "kampcode-e2730",
  storageBucket: "kampcode-e2730.appspot.com",
  messagingSenderId: "1082868260620",
  appId: "1:1082868260620:web:0bc3025dfdd9b408dc3329",
  measurementId: "G-TX98GV8VGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = db;
