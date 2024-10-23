// src/libs/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCxUgUBXDBCH5XKFnDtGpa0CWbrycihIyo",
  authDomain: "nanasgame-261b8.firebaseapp.com",
  projectId: "nanasgame-261b8",
  storageBucket: "nanasgame-261b8.appspot.com",
  messagingSenderId: "444331020460",
  appId: "1:444331020460:web:ea67719963af897b470f09",
  measurementId: "G-ZRY9DERXHE"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);


