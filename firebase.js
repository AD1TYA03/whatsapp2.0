import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCUh1N77doGKJjf9HNe8jeex-6AkDtClB0",
  authDomain: "whatsapp2-71d9f.firebaseapp.com",
  projectId: "whatsapp2-71d9f",
  storageBucket: "whatsapp2-71d9f.appspot.com",
  messagingSenderId: "681635995590",
  appId: "1:681635995590:web:fbe9b603a49c74cd661cc7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };


