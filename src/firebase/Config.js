import { initializeApp } from "firebase/app";

//no usar variables de entorno!!!!

const firebaseConfig = {
  apiKey: "AIzaSyBVB_XzuXLXPACF1N55QJF3qqhrQ2SUkh4",
  authDomain: "cubika-db.firebaseapp.com",
  projectId: "cubika-db",
  storageBucket: "cubika-db.firebasestorage.app",
  messagingSenderId: "787986376389",
  appId: "1:787986376389:web:8e33b0d0e43b7f4ff932ac"
};

export const app = initializeApp(firebaseConfig);


