import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"
const form = document.querySelector(".needs-validation")
let email;
let password;
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
form.addEventListener("submit", handlesignin)
function handlesignin() {
    event.preventDefault()
    if (!form.checkValidity()) {
        return
    }
    email = document.querySelector("#email").value
    password = document.querySelector("#password").value
    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.location.replace("home.html");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
}
// Initialize Firebase
