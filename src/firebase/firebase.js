// import firebase from 'firebase'
// import {initializeApp} from "firebase"
// require('firebase/auth')

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.EACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })
// export const auth = app.Auth()
// export default app

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKtZ6Ey5y5LRGG7KVuBRfQQWB3b-JWC08",
  authDomain: "mentor-auth-production.firebaseapp.com",
  projectId: "mentor-auth-production",
  storageBucket: "mentor-auth-production.appspot.com",
  messagingSenderId: "709699046320",
  appId: "1:709699046320:web:f18929b1f5e43c57386475"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore()