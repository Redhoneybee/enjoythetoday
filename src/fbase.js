import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC2Xkmj4DZ_PaJxew5G0DyX5sgvYXJ-fFQ",
    authDomain: "enjoythetoday-ad23d.firebaseapp.com",
    projectId: "enjoythetoday-ad23d",
    storageBucket: "enjoythetoday-ad23d.appspot.com",
    messagingSenderId: "63282346666",
    appId: "1:63282346666:web:ab052f562f06c5eca3aed3",
    measurementId: "G-PEGRYK109L"
};

firebase.initializeApp(firebaseConfig);

export const dbService = firebase.firestore();
export const storageService = firebase.storage();