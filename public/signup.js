// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"
import { getFirestore, collection, setDoc, addDoc, getDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const form = document.querySelector(".needs-validation")
const select = document.querySelector("#select")
let studentsname;
let parentsname;
let teacher;
let email;
let password;
submit.addEventListener("click", handleSignup)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAj7aZcrEPfhR2Bw-dnZTlsQ5ArD_XnQI",
    authDomain: "vhssecretpal.firebaseapp.com",
    projectId: "vhssecretpal",
    storageBucket: "vhssecretpal.appspot.com",
    messagingSenderId: "1083712377671",
    appId: "1:1083712377671:web:854dcb330a83e9ba183262"
};
form.addEventListener("submit", handleSignup)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const teacherslist = await getDoc(doc(db, "users", "listofteachers"))
let option;
teacherslist.data().arrayofteachers.forEach((i, id) => {
    option = document.createElement("option")
    option.innerHTML = i
    select.appendChild(option)
})
let arrayofteachers = teacherslist.data().arrayofteachers
async function handleSignup() {
    teacher = select.value  
    email = document.querySelector("#email").value
    password = document.querySelector("#password").value
    studentsname = document.querySelector("#studentsname").value
    parentsname = document.querySelector("#parentsname").value
    console.log(email)
    event.preventDefault()
    if (!form.checkValidity()) {
        return
    }
    for( var i = 0; i < arrayofteachers.length; i++){            
        if ( arrayofteachers[i] === teacher) { 
            arrayofteachers.splice(i, 1); 
            break;
        }
    }
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
                const docRef = addDoc(collection(db, "users"), {
                    email,
                    teacher,
                    studentsname,
                    parentsname
                }).then(() => {
                    console.log("Document written with ID: ", docRef.id);
                    deleteDoc(doc(db, "users", "listofteachers")).then(() => {
                        setDoc(doc(db, "users", "listofteachers"), {
                            arrayofteachers
                        }).then(() => {
                            const user = userCredential.user;
                            window.location.replace("home.html");
                        })
                    })
                }).catch((err) => {
                    console.error("Error adding document: ", err);
                })
            // Signed in 
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const docRef = addDoc(collection(db, "users"), {
                    email,
                    teacher,
                    studentsname,
                    parentsname
                }).then(() => {
                    console.log("Document written with ID: ", docRef.id);
                    deleteDoc(doc(db, "users", "listofteachers")).then(() => {
                        setDoc(doc(db, "users", "listofteachers"), {
                            arrayofteachers
                        }).then(() => {
                            const user = userCredential.user;
                            window.location.replace("home.html");
                        })
                    })
                }).catch((err) => {
                    console.error("Error adding document: ", err);
                    alert(err)
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
            // ..
        });

}