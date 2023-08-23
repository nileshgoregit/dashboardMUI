// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC89FFRaQcrCDovZsNw07MDWrIEBFdglYU",
  authDomain: "reactdashboard-1f884.firebaseapp.com",
  projectId: "reactdashboard-1f884",
  storageBucket: "reactdashboard-1f884.appspot.com",
  messagingSenderId: "67132347333",
  appId: "1:67132347333:web:d8c902ad6f5a134cdfb1ac",
  measurementId: "G-Q70SCFF2F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);