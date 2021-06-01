import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAF_IF0XS4RCbB2FqtH3Y_4wbJ6gPfUDDQ",
  authDomain: "connectmap-96c57.firebaseapp.com",
  databaseURL: "https://connectmap-96c57-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "connectmap-96c57",
  storageBucket: "connectmap-96c57.appspot.com",
  messagingSenderId: "863578994966",
  appId: "1:863578994966:web:4cdc04050efb78e4e73837",
  measurementId: "G-2ZD82Z92W9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    if (typeof window !== 'undefined') {
      firebase.analytics();
    }
}

export default firebase;