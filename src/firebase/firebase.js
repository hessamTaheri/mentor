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
  apiKey: "AIz
  authDomain: "mentor-aut
  projectId: "mentor-auth-pr
  storageBucket: "mentor-aut
  messagingSenderId: "709699
  appId: "1:70969904632
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore()
