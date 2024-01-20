import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyALCCpeDNBU_IKOxdGqE1_3EeNKBi7NrXA",
    authDomain: "fir-ae0ee.firebaseapp.com",
    projectId: "fir-ae0ee",
    storageBucket: "fir-ae0ee.appspot.com",
    messagingSenderId: "948421079128",
    appId: "1:948421079128:web:9c6cee724b96133ef0da2d",
    measurementId: "G-HCCY0YR9CS"
  };
 export  default firebase.initializeApp(firebaseConfig)