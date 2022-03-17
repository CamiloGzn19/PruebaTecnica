import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_Do9_uxy2O81W_xVNOaml0ktSGBSck04",
  authDomain: "prueba-tecnica-249df.firebaseapp.com",
  projectId: "prueba-tecnica-249df",
  storageBucket: "prueba-tecnica-249df.appspot.com",
  messagingSenderId: "425048560503",
  appId: "1:425048560503:web:9a1b7313286e84d8ccc772",
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };
