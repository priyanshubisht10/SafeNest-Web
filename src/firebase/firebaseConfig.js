// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuOz5LQ9_F1qFe7z9lPKMJ56irpSIKpR0",
  authDomain: "safenest-943d3.firebaseapp.com",
  databaseURL: "https://safenest-943d3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "safenest-943d3",
  storageBucket: "safenest-943d3.appspot.com",
  messagingSenderId: "754658528584",
  appId: "1:754658528584:web:9491c17ed8fdafa712777d",
  measurementId: "G-6GFEQPG8W8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
