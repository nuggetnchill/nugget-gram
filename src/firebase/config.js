import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBehZDGg4yK7A8sNhP9nYzwqyrt_AHPa1o",
  authDomain: "nugget-gram.firebaseapp.com",
  databaseURL: "https://nugget-gram.firebaseio.com",
  projectId: "nugget-gram",
  storageBucket: "nugget-gram.appspot.com",
  messagingSenderId: "736403113254",
  appId: "1:736403113254:web:ad35ee9f7b08ee8424ede7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
