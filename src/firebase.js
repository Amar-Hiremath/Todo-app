import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJ3M4iImgmuhMKRxl8tXjbJn5BE2nLKlA",
  authDomain: "todo-list-amar.firebaseapp.com",
  projectId: "todo-list-amar",
  storageBucket: "todo-list-amar.appspot.com",
  messagingSenderId: "46621283022",
  appId: "1:46621283022:web:f87fa656c42aceb100769f",
  measurementId: "G-1T8BJCL7EP"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
