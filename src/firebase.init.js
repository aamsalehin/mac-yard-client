// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVL_9GhjN-6kwlOyM0gaqY3IbFzi5OH2w",
  authDomain: "mac-yard.firebaseapp.com",
  projectId: "mac-yard",
  storageBucket: "mac-yard.appspot.com",
  messagingSenderId: "62739586132",
  appId: "1:62739586132:web:21cc61a00a66169f3721c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
