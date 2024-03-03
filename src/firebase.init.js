// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASj98ElhGQzSK0kPCwE7bpbtvfB10JQDU",
  authDomain: "ecommerceseonew.firebaseapp.com",
  projectId: "ecommerceseonew",
  storageBucket: "ecommerceseonew.appspot.com",
  messagingSenderId: "349734365028",
  appId: "1:349734365028:web:a959bd016047b4406bfc71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;