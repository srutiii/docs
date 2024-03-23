// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCya9xOIt5yugCO5bcGs9KFZhNKEj6TbUU",
  authDomain: "my-docs-1caa3.firebaseapp.com",
  projectId: "my-docs-1caa3",
  storageBucket: "my-docs-1caa3.appspot.com",
  messagingSenderId: "938416636482",
  appId: "1:938416636482:web:a7a1b5e3de58f90a9123db",
  measurementId: "G-82G5W8R4S0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };