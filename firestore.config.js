// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXWodzIrNBy1Z_khWH7cnf-4odmLSFuU8",
    authDomain: "dogfoodapp.firebaseapp.com",
    projectId: "dogfoodapp",
    storageBucket: "dogfoodapp.appspot.com",
    messagingSenderId: "931012866581",
    appId: "1:931012866581:web:1268fb874197e00a44941c",
    measurementId: "G-04WE1GC3QT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
