import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "track-accessories.firebaseapp.com",
  projectId: "track-accessories",
  storageBucket: "track-accessories.appspot.com",
  messagingSenderId: "658273541573",
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB,
}

firebase.initializeApp(firebaseConfig);

export default firebase;