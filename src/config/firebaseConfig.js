
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VU9B-IxQC4xt1GCavZURhGcdakysqGs",
  authDomain: "crud-users-e7361.firebaseapp.com",
  projectId: "crud-users-e7361",
  storageBucket: "crud-users-e7361.appspot.com",
  messagingSenderId: "830974705600",
  appId: "1:830974705600:web:f2d7ec8606400008eed225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };