// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7z_Nbrr9KuQDQfUvkMC3mD4RvdkFr2OU",
    authDomain: "instagram-5f077.firebaseapp.com",
    projectId: "instagram-5f077",
    storageBucket: "instagram-5f077.appspot.com",
    messagingSenderId: "1098565768885",
    appId: "1:1098565768885:web:f032a24f3b68ee258d90fc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);