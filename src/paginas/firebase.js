// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ExXDx2ZWtvr--BNIae0S7ftV8Or2hu0",
  authDomain: "prueba1-1f1bc.firebaseapp.com",
  projectId: "prueba1-1f1bc",
  storageBucket: "prueba1-1f1bc.firebasestorage.app",
  messagingSenderId: "869204553227",
  appId: "1:869204553227:web:1c6d97f93692a02d59a10e",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
