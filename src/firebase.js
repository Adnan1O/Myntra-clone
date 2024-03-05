// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB7KItQFEvX_cbN053VBeSmtUeQiYDCCOE",
//   authDomain: "myntra-d89de.firebaseapp.com",
//   projectId: "myntra-d89de",
//   storageBucket: "myntra-d89de.appspot.com",
//   messagingSenderId: "2339273379",
//   appId: "1:2339273379:web:d045a8dfd69236a8de9d16"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;  
