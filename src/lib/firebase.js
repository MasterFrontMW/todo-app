/* eslint-disable */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'to-do-app-master-front.firebaseapp.com',
  projectId: 'to-do-app-master-front',
  storageBucket: 'to-do-app-master-front.appspot.com',
  messagingSenderId: '601129874808',
  appId: '1:601129874808:web:e4196dc85c4696f779848d',
  measurementId: 'G-52B0K87N3Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
