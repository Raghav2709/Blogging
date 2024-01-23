// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-fa27d.firebaseapp.com",
  projectId: "blog-fa27d",
  storageBucket: "blog-fa27d.appspot.com",
  messagingSenderId: "265710368704",
  appId: "1:265710368704:web:b23efa2e9f6d43d4b43a25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

