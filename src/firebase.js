import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7m9Eabb97nFsIx8rjJnh8wFS7hkH8DGM",
    authDomain: "my-project-cs338-339220.firebaseapp.com",
    projectId: "my-project-cs338-339220",
    storageBucket: "my-project-cs338-339220.appspot.com",
    messagingSenderId: "1009307378130",
    appId: "1:1009307378130:web:7541067444f6c3b8eda80b",
    measurementId: "G-BMBGBPWK7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;