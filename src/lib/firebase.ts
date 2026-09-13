import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeaQXk9PI-97M-0jQE_PT66OcSqahSpg0",
  authDomain: "projectk-theananta.firebaseapp.com",
  projectId: "projectk-theananta",
  storageBucket: "projectk-theananta.firebasestorage.app",
  messagingSenderId: "142471723854",
  appId: "1:142471723854:web:9ae39d5691d06f1778bc1f",
  measurementId: "G-8Y80WBQSHM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
