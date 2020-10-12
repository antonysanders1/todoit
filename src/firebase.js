import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7XA5POBmBfhR1RrY7N0LZ8XaQPODUOAg",
    authDomain: "todo-app-7ae4b.firebaseapp.com",
    databaseURL: "https://todo-app-7ae4b.firebaseio.com",
    projectId: "todo-app-7ae4b",
    storageBucket: "todo-app-7ae4b.appspot.com",
    messagingSenderId: "489502364058",
    appId: "1:489502364058:web:ee13f167cd026f604e6a23",
    measurementId: "G-WFRJLR04S9"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }