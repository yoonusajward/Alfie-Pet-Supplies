// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrY96f6DPDJHdgRyrHjvLLeNxo96dtn58",
  authDomain: "vue-site-yns.firebaseapp.com",
  projectId: "vue-site-yns",
  storageBucket: "vue-site-yns.appspot.com",
  messagingSenderId: "391826032707",
  appId: "1:391826032707:web:44a9b2c3d5e55ea3722cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
