import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBK3ooxUUStZfQrdDoccmIhzanUw3s5OE8",
  authDomain: "react-chatbot-app-9e242.firebaseapp.com",
  projectId: "react-chatbot-app-9e242",
  storageBucket: "react-chatbot-app-9e242.appspot.com",
  messagingSenderId: "753331285531",
  appId: "1:753331285531:web:4be6567ea858b10698d2be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app, auth, db}; 
