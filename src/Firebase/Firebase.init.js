// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHQe9dGNukJ2nhEE0btXeLdASza_-xQ4",
  authDomain: "assesment-5.firebaseapp.com",
  projectId: "assesment-5",
  storageBucket: "assesment-5.appspot.com",
  messagingSenderId: "140360109115",
  appId: "1:140360109115:web:e5f49b8e5f5601dba8e01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;