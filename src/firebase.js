import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyBs1v-oFpfKa68WfY9e_cDteQ0nZuwWs4k",
        authDomain: "rookas-messenger-mern-app.firebaseapp.com",
        projectId: "rookas-messenger-mern-app",
        storageBucket: "rookas-messenger-mern-app.appspot.com",
        messagingSenderId: "246603889387",
        appId: "1:246603889387:web:5781733f562cf7486e5cae",
        measurementId: "G-X6TWQQ4MVQ"
});

const db = firebaseApp.firestore();

export default db;