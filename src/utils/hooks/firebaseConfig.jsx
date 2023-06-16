// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBy7EWZlQBbQefFfODSLeuu3aWsBt9jas",
  authDomain: "portfolio-firebase-c0c12.firebaseapp.com",
  databaseURL: "https://portfolio-firebase-c0c12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-firebase-c0c12",
  storageBucket: "portfolio-firebase-c0c12.appspot.com",
  messagingSenderId: "949225306116",
  appId: "1:949225306116:web:1994759fc992060c855d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;