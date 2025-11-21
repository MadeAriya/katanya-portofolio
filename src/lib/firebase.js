
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtv2Gz1BBDwlKKL29KKxRVY8vBLcSQmmE",
  authDomain: "katanya-portofolio.firebaseapp.com",
  projectId: "katanya-portofolio",
  storageBucket: "katanya-portofolio.firebasestorage.app",
  messagingSenderId: "692650362702",
  appId: "1:692650362702:web:985033c2bebaf8ab83401f",
  measurementId: "G-TMKN3523MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
