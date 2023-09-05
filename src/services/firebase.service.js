// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: 'vtop3-test.firebaseapp.com',
  projectId: 'vtop3-test',
  storageBucket: 'vtop3-test.appspot.com',
  messagingSenderId: '730757134905',
  appId: '1:730757134905:web:226c4562fda80b88e0ebe8',
};

// Initialize Firebase
initializeApp(firebaseConfig);
