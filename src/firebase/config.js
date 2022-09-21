import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNL-1wR-iDvQJZiz9PvvlULuDhngFwWYk',
  authDomain: 'cake-avenue-47b22.firebaseapp.com',
  projectId: 'cake-avenue-47b22',
  storageBucket: 'cake-avenue-47b22.appspot.com',
  messagingSenderId: '888667941176',
  appId: '1:888667941176:web:c9cf6691a193b4ac8cb9cd',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
