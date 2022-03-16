import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBMQPKyAKPYA_vqOMenZdu7kJKFfW-N2Gk",
  authDomain: "whatsapp-clone-d6a90.firebaseapp.com",
  projectId: "whatsapp-clone-d6a90",
  storageBucket: "whatsapp-clone-d6a90.appspot.com",
  messagingSenderId: "250343558124",
  appId: "1:250343558124:web:ed6bee1f962ef9107a0ec9",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage().ref("images");
const audioStorage = firebaseApp.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
