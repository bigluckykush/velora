// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getstorage } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "velora-affa1.firebaseapp.com",
  projectId: "velora-affa1",
  storageBucket: "velora-affa1.firebasestorage.app",
  messagingSenderId: "680019973590",
  appId: "1:680019973590:web:07041b36fe34db76f60077"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
// const storage = getstorage(app)

export {db } 