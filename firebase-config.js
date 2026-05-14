// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFqLe29DeW4QAp5QKCQv0BmGddkP8Nw7U",
  authDomain: "fatum-daba6.firebaseapp.com",
  projectId: "fatum-daba6",
  storageBucket: "fatum-daba6.firebasestorage.app",
  messagingSenderId: "1014707563328",
  appId: "1:1014707563328:web:fa8f2dbc23314e080428a5",
  measurementId: "G-482W515Z6D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithPopup, onAuthStateChanged, doc, setDoc, getDoc, onSnapshot };