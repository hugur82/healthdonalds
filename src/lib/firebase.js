/* global process */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "healthdonals-aaf02.firebaseapp.com",
  projectId: "healthdonals-aaf02",
  storageBucket: "healthdonals-aaf02.appspot.com",
  messagingSenderId: "1061835881132",
  appId: "1:1061835881132:web:2ba427177aa8a0bfb03d09",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage();
