// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZpNFJN4sfq8dQaiYQp3xPcurMYYaGJmg",
  authDomain: "react-hooks-blog-6e7fa.firebaseapp.com",
  projectId: "react-hooks-blog-6e7fa",
  storageBucket: "react-hooks-blog-6e7fa.appspot.com",
  messagingSenderId: "441259435802",
  appId: "1:441259435802:web:e61fcbaa4d084a3902eea3"
};
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;