
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBw4z3IeAmP1xt0MDwjrwJRF0WbTc_IpAI",
    authDomain: "chat-appey.firebaseapp.com",
    projectId: "chat-appey",
    storageBucket: "chat-appey.appspot.com",
    messagingSenderId: "1008031922631",
    appId: "1:1008031922631:web:6e99cd76f638d776fb01e2",
    measurementId: "G-6DGG1D052T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const user = auth.currentUser;