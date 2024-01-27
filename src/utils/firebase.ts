// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8k_f8tCtKq4Mn7oP_kzL6YNB1zVm_OVU",
  authDomain: "feedie-7e12b.firebaseapp.com",
  projectId: "feedie-7e12b",
  storageBucket: "feedie-7e12b.appspot.com",
  messagingSenderId: "791746521568",
  appId: "1:791746521568:web:7abf65340c00af95bfe385",
  measurementId: "G-NEW2RHZ5M0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
