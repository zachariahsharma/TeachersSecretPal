import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"
import { getFirestore, collection, setDoc, addDoc, getDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCAj7aZcrEPfhR2Bw-dnZTlsQ5ArD_XnQI",
    authDomain: "vhssecretpal.firebaseapp.com",
    projectId: "vhssecretpal",
    storageBucket: "vhssecretpal.appspot.com",
    messagingSenderId: "1083712377671",
    appId: "1:1083712377671:web:854dcb330a83e9ba183262"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log('wsg')
console.log(auth.currentUser)