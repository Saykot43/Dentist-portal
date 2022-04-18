// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAUru2_ocFAIAtyUjyRiDL1ShiY9G_pks",
  authDomain: "ass10-c3f18.firebaseapp.com",
  databaseURL: "https://ass10-c3f18-default-rtdb.firebaseio.com",
  projectId: "ass10-c3f18",
  storageBucket: "ass10-c3f18.appspot.com",
  messagingSenderId: "806246430171",
  appId: "1:806246430171:web:4abf61f9e7a879aa56e3fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default auth;


