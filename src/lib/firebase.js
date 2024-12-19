// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw1GGM-vklHvWP_6YZa8redkFdm0cJXQE",
  authDomain: "pikplay-72843.firebaseapp.com",
  projectId: "pikplay-72843",
  storageBucket: "pikplay-72843.firebasestorage.app",
  messagingSenderId: "1095528210985",
  appId: "1:1095528210985:web:39d7a6f1277a4451caf238",
  measurementId: "G-5L0TTHX1CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const storage = getStorage(app)

export { app, analytics, storage };
