import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRd_Sqr4E1r8DysY803meDSZT2TInsT0M",
  authDomain: "slack-clone-2ec9d.firebaseapp.com",
  projectId: "slack-clone-2ec9d",
  storageBucket: "slack-clone-2ec9d.appspot.com",
  messagingSenderId: "841594502722",
  appId: "1:841594502722:web:97226e4951476c572337db",
  measurementId: "G-N0C92RQ09K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
