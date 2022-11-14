import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIkPv7WrrJ4PgvrjBSSmYEtU1W_lvH0i0",
  authDomain: "netflix-clone-54b33.firebaseapp.com",
  projectId: "netflix-clone-54b33",
  storageBucket: "netflix-clone-54b33.appspot.com",
  messagingSenderId: "547160960851",
  appId: "1:547160960851:web:abd68eb18d94221ddffba6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
