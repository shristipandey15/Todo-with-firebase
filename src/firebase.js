// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrDrMXZj045mHGxiwuMltnCv9OiaRHVjc",
  authDomain: "todo-app-a4ab6.firebaseapp.com",
  projectId: "todo-app-a4ab6",
  storageBucket: "todo-app-a4ab6.appspot.com",
  messagingSenderId: "682621500082",
  appId: "1:682621500082:web:c16f44d541c7bd06c567ab",
  measurementId: "G-P0NLZJ2SCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)