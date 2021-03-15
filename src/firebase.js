import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyBv36HEmnaFmlWBlhZ2KrfDXjslTL9B7eM",
    authDomain: "safeshop-41a36.firebaseapp.com",
    projectId: "safeshop-41a36",
    storageBucket: "safeshop-41a36.appspot.com",
    messagingSenderId: "496430631132",
    appId: "1:496430631132:web:c79c9d66f830f78a288c19",
    measurementId: "G-Q8PB223RG7"


})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth } 