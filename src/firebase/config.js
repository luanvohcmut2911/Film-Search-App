import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB1yeNFQpOqEy5B31rg8on4MlkVM__C5Ns",
    authDomain: "film-search-app-a515a.firebaseapp.com",
    projectId: "film-search-app-a515a",
    storageBucket: "film-search-app-a515a.appspot.com",
    messagingSenderId: "132206206975",
    appId: "1:132206206975:web:164f40422ffab2c37591ca",
    measurementId: "G-KNWKDJMCKN"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;