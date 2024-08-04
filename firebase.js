// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMUPHIIBLD8QDpJEe_PoMcS4QMARFRW-0",
    authDomain: "inventory-management-4f7d3.firebaseapp.com",
    projectId: "inventory-management-4f7d3",
    storageBucket: "inventory-management-4f7d3.appspot.com",
    messagingSenderId: "923774981133",
    appId: "1:923774981133:web:ffc6a7c571a4e152707144",
    measurementId: "G-3GWDPEX8YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}