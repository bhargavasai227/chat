
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBw4z3IeAmP1xt0MDwjrwJRF0WbTc_IpAI",
    authDomain: "chat-appey.firebaseapp.com",
    projectId: "chat-appey",
    storageBucket: "chat-appey.appspot.com",
    messagingSenderId: "1008031922631",
    appId: "1:1008031922631:web:6e99cd76f638d776fb01e2",
    databaseURL: "https://https://chat-appey-default-rtdb.firebaseio.com/.firebaseio.com",
    measurementId: "G-6DGG1D052T"
};

export const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);
export const auth = getAuth();
export const user = auth.currentUser;