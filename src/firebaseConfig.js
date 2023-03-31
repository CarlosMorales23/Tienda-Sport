
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAszcifq9vEwKvwLzXMyMvxUjuT4zU8vH4",
    authDomain: "tiendasport-c49b8.firebaseapp.com",
    projectId: "tiendasport-c49b8",
    storageBucket: "tiendasport-c49b8.appspot.com",
    messagingSenderId: "494142689831",
    appId: "1:494142689831:web:430c8661236558c2e1b402",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);