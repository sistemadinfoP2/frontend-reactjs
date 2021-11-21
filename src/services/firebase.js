import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCE4zScwW37ha8BwW3PSuqfuBvx239qrQ0",
  authDomain: "biblioteca-online-4ad1e.firebaseapp.com",
  projectId: "biblioteca-online-4ad1e",
  storageBucket: "biblioteca-online-4ad1e.appspot.com",
  messagingSenderId: "533173189060",
  appId: "1:533173189060:web:f51e9b9bb0d3e5076b4c91"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };