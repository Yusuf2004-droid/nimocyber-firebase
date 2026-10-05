import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCncyuztiTtCqieYt8Ici44dIA8f4goA34",
  authDomain: "nimocyber-1ec24.firebaseapp.com",
  projectId: "nimocyber-1ec24",
  storageBucket: "nimocyber-1ec24.firebasestorage.app",
  messagingSenderId: "135567913516",
  appId: "1:135567913516:web:d6b530d712fa6fb1115789"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);