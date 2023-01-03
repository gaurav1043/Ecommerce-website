import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBUkHiIug28VIQchSJyBSSaNInlvQPT_AI",
  authDomain: "ecommerce-app-6f56e.firebaseapp.com",
  projectId: "ecommerce-app-6f56e",
  storageBucket: "ecommerce-app-6f56e.appspot.com",
  messagingSenderId: "893736242932",
  appId: "1:893736242932:web:6b723b7e590fe81a4658a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
