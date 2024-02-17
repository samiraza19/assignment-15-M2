
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyClCKRw9UYuSBt4xc-UpiKvXXtZ0zJnCmw",
  authDomain: "first-auth-app-50afb.firebaseapp.com",
  projectId: "first-auth-app-50afb",
  storageBucket: "first-auth-app-50afb.appspot.com",
  messagingSenderId: "92645292008",
  appId: "1:92645292008:web:719e3c0d68fc7f7627d65d"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
 
const auth = getAuth(firebase_app)

export {firebase_app,auth}