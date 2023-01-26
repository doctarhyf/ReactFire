// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKzgxyaT9PZxPvq-WDESCnTyV6Ap0E_A8",
  authDomain: "lalouise-6ef7b.firebaseapp.com",
  databaseURL: "https://lalouise-6ef7b-default-rtdb.firebaseio.com",
  projectId: "lalouise-6ef7b",
  storageBucket: "lalouise-6ef7b.appspot.com",
  messagingSenderId: "843021144425",
  appId: "1:843021144425:web:ed7e0a81f207097bd3edf8",
  measurementId: "G-NZN2QJYMT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
