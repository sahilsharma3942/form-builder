// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJKeCZnZfJJaqFrTEDHdp8AOZWXB7wdEA",
  authDomain: "form-builder-9841d.firebaseapp.com",
  projectId: "form-builder-9841d",
  storageBucket: "form-builder-9841d.appspot.com",
  messagingSenderId: "7797447477",
  appId: "1:7797447477:web:b095c67d722ede30104a7c",
  measurementId: "G-L4DBWG99ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db};